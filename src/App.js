import "./App.css";
import React from "react";
import Burger from "./component/burgerBuild/burger";
import BuildControl from "./component/burgerControl/control";

function App() {
  const [meat, setMeat] = React.useState(0);
  const [cheese, setCheese] = React.useState(0);
  const [salad, setSalad] = React.useState(0);
  const [tomato, setTomato] = React.useState(0);

  const addMeat = () => setMeat(meat + 1);
  const addCheese = () => setCheese(cheese + 1);
  const addSalad = () => setSalad(salad + 1);
  const addTomato = () => setTomato(tomato + 1);

  const removeMeat = () => setMeat(meat > 0 ? meat - 1 : 0);
  const removeCheese = () => setCheese(cheese > 0 ? cheese - 1 : 0);
  const removeSalad = () => setSalad(salad > 0 ? salad - 1 : 0);
  const removeTomato = () => setTomato(tomato > 0 ? tomato - 1 : 0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Burger Builder</h1>
        <p>Build your own delicious burger!</p>
      </header>
      <main>
        <section className="burger-builder">
          <Burger 
            meat={meat}
            cheese={cheese}
            salad={salad}
            tomato={tomato}
          />
          <BuildControl 
            addMeat={addMeat}
            addCheese={addCheese}
            addSalad={addSalad}
            addTomato={addTomato}
            removeMeat={removeMeat}
            removeCheese={removeCheese}
            removeSalad={removeSalad}
            removeTomato={removeTomato}
          />
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 Burger Builder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
