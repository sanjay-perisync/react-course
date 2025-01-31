// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";

function App() {
  const [counter,setCounter]=useState(0)
  const addval = () =>{
    setCounter(counter + 1)
  }

  const removeval = () =>{
    setCounter(counter - 1)
  }
  return (
    <div className="App">
      <h1>Total Items Quantity : {counter}</h1>
      <h2>Product name : Boost</h2>
      <button onClick={addval}>Add Items</button>{" "}
      <button onClick={removeval}>Remove Items</button>
    </div>
  );
}

export default App;
