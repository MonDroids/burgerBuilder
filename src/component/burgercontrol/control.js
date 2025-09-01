import React from 'react';
import './control.css';
import { useNavigate } from 'react-router-dom';

function BuildControl(props) {
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate('/ordered', {
      state: {
        orderData: {
          meat: props.meat,
          cheese: props.cheese,
          salad: props.salad,
          tomato: props.tomato,
          totalPrice: props.totalPrice(),
        },
      },
    });
  };

  return (
    <div className="controls">
      <h2>Бүтээх Хяналт</h2>

      <div className="control-row">
        <span className="ingredient-name">🥩 Мах: {props.meat}</span>
        <button onClick={props.addmeat} className="add-button">
          Мах Нэмэх
        </button>
        <button
          onClick={props.removeMeat}
          className="remove-button"
          disabled={props.meat === 0}
        >
          Мах Хасах
        </button>
      </div>
      <div className="control-row">
        <span className="ingredient-name">🧀 Бяслаг: {props.cheese}</span>
        <button onClick={props.addcheese} className="add-button">
          Бяслаг Нэмэх
        </button>
        <button
          onClick={props.removeCheese}
          className="remove-button"
          disabled={props.cheese === 0}
        >
          Бяслаг Хасах
        </button>
      </div>
      <div className="control-row">
        <span className="ingredient-name">🥬 Салат: {props.salad}</span>
        <button onClick={props.addsalad} className="add-button">
          Салат Нэмэх
        </button>
        <button
          onClick={props.removeSalad}
          className="remove-button"
          disabled={props.salad === 0}
        >
          Салат Хасах
        </button>
      </div>
      <div className="control-row">
        <span className="ingredient-name">🍅 Улаан лооль: {props.tomato}</span>
        <button onClick={props.addtomato} className="add-button">
          Улаан лооль Нэмэх
        </button>
        <button
          onClick={props.removeTomato}
          className="remove-button"
          disabled={props.tomato === 0}
        >
          Улаан лооль Хасах
        </button>
      </div>

      <button className="order-button" onClick={handleOrder}>
        Захиалах
        <span className="total-price">Нийт үнэ: ${props.totalPrice()}</span>
      </button>
    </div>
  );
}

export default BuildControl;
