import "./App.css";
import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);

  const increaseValue = () => {
    console.log("Button clicked");

    setCount(count + 1);
  };
  const decreaseValue = () => {
    // console.log('button click decrease')
    setCount(count - 1);
  };
  const resetValue = () => {
    // console.log('button click decrease')
    setCount(0);
  };
  return (
    <>
      <div>
        <h1>Counter Project</h1>
        <button onClick={increaseValue}>Add Value {count}</button>
        <button onClick={decreaseValue}>Remove Value {count}</button>
      </div>
      <button onClick={resetValue}>Reset Value</button>
    </>
  );
};

export default App;
