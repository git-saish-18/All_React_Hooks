import "./App.css";
import UseState from "../src/components/UseState";
import Useeffect from "../src/components/UseEffect";
import Child from "./components/Child";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <UseState /> */}

        {/* <Useeffect /> */}
        <Child />
      </header>
    </div>
  );
}

export default App;
