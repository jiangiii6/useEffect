import React from 'react';
import './index.css';

//import MyReactDOM from './myReact/MyReactDom';
//import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import App from './App'
// const { useState } = React;

// function Counter() {
//   const [count, setCounter] = useState(0);

//   const toAlert = () => {
//     setTimeout(() => {
//       alert("The most recent counter number: " + count);
//     }, 5000);
//   };

//   const add = ()=>{
//     setCounter(count + 1)
//   };

//   const subtract = ()=>{
//     setCounter(count - 1)
//   };

//   return (
//     <div className="res">
//       <h1>Count: {count}</h1>
//       <div className="contanier">
//         <button onClick={add}>+</button>
//         <button onClick={subtract}>-</button>
//         <button onClick={toAlert}>alert</button>
//       </div>
//     </div>
//   );
// }


ReactDOM.render(<App />, document.getElementById("root"));

// eslint-disable-next-line 
// const reactE = <section>
//   <header>Counter:0</header>
//   <button>+</button><button>-</button>
// </section>;

// const Button = (props) => {
//  return <button>{props.children}</button>
// }



// class Counter extends React.Component {
//   // constructor(props) {
//   //   super(props)
//   // }

//   state = {
//     counter: 0,
//     title: "Counter"
//   }

//   static getDerivedStateFromProps(props, state) {
//     // 
//     console.log('Props', props)
//     console.log('state', state)
//     if (props.title) {
//       return { ...state, title: props.title };
//     }
//     return state;
//   }
//   render() {
//     console.log("section", document.querySelector('section'))
//     console.log("STATE", this.state)
//     return <section>
//       <header>{this.state.title}:{this.state.counter}</header>
//       <Button>+</Button><Button>-</Button>
//     </section>;
//   }
//   componentDidMount() {
//     console.log("section", document.querySelector('section'))
//   }
// }

// console.log("Counter", Counter)
// console.log("<Counter/>", <Counter />)


// MyReactDOM.render(
//   <Counter title="MyCounter" />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
