import './burger.css';

const Burger = (props) => {
  return (
    <div className="burger-container">
      {/* <h1 className="burger-title">Burger Builder</h1>
      <p className="burger-subtitle">Build your own delicious burger!</p> */}
      
     
        {/* Top bun with seeds */}
        <div className="top-bun">
          <div className="seed1"></div>
          <div className="seed2"></div>
          <div className="seed3"></div>
        </div>

       
          {props.meat > 0 &&(
            <div>
              {props.meat > 1 && <div className="meat">Meat</div>}
              {props.meat > 2 && <div className="meat">Meat</div>}
              {props.meat > 3 && <div className="meat">Meat</div>}
            </div>
          )}
          {props.cheese > 0 &&(
            <div>
              {props.cheese > 1 && <div className="cheese">Cheese</div>}
              {props.cheese > 2 && <div className="cheese">Cheese</div>}
              {props.cheese > 3 && <div className="cheese">Cheese</div>}
            </div>
          )}
            {props.salad > 0 &&(
              <div>
                {props.salad > 1 && <div className="salad">Salad</div>}
                {props.salad > 2 && <div className="salad">Salad</div>}
                {props.salad > 3 && <div className="salad">Salad</div>}
              </div>
            )}
            {props.tomato > 0 &&(
              <div>
                {props.tomato > 1 && <div className="tomato">Tomato</div>}
                {props.tomato > 2 && <div className="tomato">Tomato</div>}
                {props.tomato > 3 && <div className="tomato">Tomato</div>}
              </div>
            )}
            <div className='bottom-bun'></div>
          </div>
      // {/* <footer className="footer">
      //   © 2023 Burger Builder. All rights reserved.
      // </footer> */}
  );
};

export default Burger;