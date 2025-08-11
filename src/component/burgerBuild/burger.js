import './burger.css';

const Burger = () => {
  return (
    <div className="burger-container">
      {/* <h1 className="burger-title">Burger Builder</h1>
      <p className="burger-subtitle">Build your own delicious burger!</p> */}
      
      <div className="burger">
        {/* Top bun with seeds */}
        <div className="top-bun">
          <div className="seed1"></div>
          <div className="seed2"></div>
          <div className="seed3"></div>
        </div>
        
        {/* Burger ingredients */}
        <div className="tomato">Tomato</div>
        <div className="salad">Salad</div>
        <div className="cheese">Cheese</div>
        <div className="meat">Meat</div>
        
        {/* Bottom bun */}
        <div className="bottom-bun"></div>
      </div>
      
      {/* <footer className="footer">
        © 2023 Burger Builder. All rights reserved.
      </footer> */}
    </div>
  );
};

export default Burger;