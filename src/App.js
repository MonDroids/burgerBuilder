import "./App.css";
import Burger from "./component/burgerBuild/burger";
import BuildControl from "./component/burgerControl/control";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Burger Builder</h1>
        <p>Build your own delicious burger!</p>
      </header>
      <main>
        <section className="burger-builder">
          <Burger />
          <BuildControl />
        </section>
      </main>
      <footer className="App-footer">
        <p>&copy; 2023 Burger Builder. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
