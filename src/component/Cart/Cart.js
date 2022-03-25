import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { strMeal, strMealThumb } = props.name;
    return (
        <div className='cart-details'>
            <img src={strMealThumb} alt="" />
            <h2>{ strMeal}</h2>
        </div>
    );
};

export default Cart;