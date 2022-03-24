import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './Meal.css';

const Meal = (props) => {
    console.log(props);
    const { strMealThumb, strMeal, strCategory, strArea } = props.meal;
    return (
        <div className='meal-container'>
            <img src={strMealThumb} alt="" />
            <h2>Name: {strMeal}</h2>
            <p>Category: {strCategory}</p>
            <strong>Country: {strArea}</strong>
            <AiOutlineShoppingCart size={ 30} className='cart-icon'/>
        </div>
    );
};

export default Meal;