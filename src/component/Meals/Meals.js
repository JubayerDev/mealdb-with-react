import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    // console.log(meals);
    const [names, setNames] = useState([]);
    console.log(names);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    const nameHandler = (meal) => {
        const newName = [...names, meal];
        setNames(newName);
    }
    return (
        <div className='mealdb-container'>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal} nameHandler={nameHandler}></Meal>)
                }
            </div>
            <div className="cart-container">
                {
                    names.map(name => <Cart key={name.idMeal} name={ name}></Cart>)
                }
            </div>
        </div>
    );
};

export default Meals;