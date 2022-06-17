import React, { useEffect, useState } from "react";
import '../index.css';

//import MyReactDOM from './myReact/MyReactDom';
//import reportWebVitals from './reportWebVitals';
//import ReactDOM from 'react-dom';


function Counter() {
  const [count, setCount] = useState(0);
  const [res] = useState("Counter");
  const [on, setOn] = useState(false);

  const toAlert = () => {
    setTimeout(() => {
        setOn(true);
    }, 5000);
  };

  const add = ()=>{
    setCount(count + 1)
  };

  const subtract = ()=>{
    setCount(count - 1)
  };

  
   useEffect(() => {
    alert("ComponentDidmount");
  }, []);


  useEffect(() => {
    if (on) {
      alert("componentDidUpdate");
      setOn(false);
    }
  }, [on]);


  useEffect(() => {
    return () => {
      alert("componentWillUnmount");
    };
  }, []);

  return (
    <div className="res">
      <h1>{res}: {count}</h1>
      <div className="contanier">
        <button onClick={add}>+</button>
        <button onClick={subtract}>-</button>
        <button onClick={toAlert}>alert</button>
      </div>
    </div>
  );
}

export default Counter;