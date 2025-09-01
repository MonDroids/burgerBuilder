import React from 'react';
import './order.css';
function Order(props) {
  return (
    <div className="order">
      <h2>Your Order</h2>
      <p>Meat: {props.meat}</p>
      <p>Cheese: {props.cheese}</p>
      <p>Salad: {props.salad}</p>
      <p>Tomato: {props.tomato}</p>
      <h3>Total Price: ${props.calculatePrice()}</h3>
      <button onClick={props.onOrder} className="order-button">
        Place Order
      </button>
    </div>
  );
}
export default Order;
// This component displays the order summary and total price.
// It receives the current ingredient counts and a function to calculate the total price as props.
