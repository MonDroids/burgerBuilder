import React from 'react';
import './burger.css';

const Burger = (props) => {
  return (
    <div className="burger">
      <div className="top-bun">
        <div className="seed1"></div>
        <div className="seed2"></div>
        <div className="seed3"></div>
      </div>

      {props.meat > 0 && (
        <div>
          {props.meat > 0 && <div className="meat">meat </div>}
          {props.meat > 1 && <div className="meat">meat </div>}
          {props.meat > 2 && <div className="meat">meat </div>}
        </div>
      )}
      {props.cheese > 0 && (
        <div>
          {props.cheese > 0 && <div className="cheese">cheese </div>}
          {props.cheese > 1 && <div className="cheese">cheese </div>}
          {props.cheese > 2 && <div className="cheese">cheese </div>}
        </div>
      )}
      {props.salad > 0 && (
        <div>
          {props.salad > 0 && <div className="salad">salad </div>}
          {props.salad > 1 && <div className="salad">salad </div>}
          {props.salad > 2 && <div className="salad">salad </div>}
        </div>
      )}
      {props.tomato > 0 && (
        <div>
          {props.tomato > 0 && <div className="tomato">tomato </div>}
          {props.tomato > 1 && <div className="tomato">tomato </div>}
          {props.tomato > 2 && <div className="tomato">tomato </div>}
        </div>
      )}
      <div className="bottom-bun"></div>
    </div>
  );
};
export default Burger;
