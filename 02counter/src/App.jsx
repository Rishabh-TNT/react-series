import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  const addValue = () => {
    if (counter < 20) {
      counter++;
      setCounter(counter);
    }
    console.log("Value added", counter);
  };

  const subtractValue = () => {
    if (counter > 0) {
      counter--;
      setCounter(counter);
      console.log("Value Subtracted", counter);
    }
  };

  const random = Math.floor(Math.random() * 10 + 1);

  return (
    <>
      <h1>Chai aur react {random}</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={subtractValue}>Subtract Value {counter}</button>
      <footer>{counter}</footer>
    </>
  );
}

export default App;
