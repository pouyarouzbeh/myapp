import React , {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import pic1 from "./img2.jpg";

// function Welcome({name , age}) {
//   return(
//     <>
//     <h2>سلام {name}</h2>
//     <h3>دارای سن {age}</h3>
//     </>
//   )
// }

// function HelloWorld() {
//   return (
//     <div>
//       <Welcome name="علی" age="17" />
//       <Welcome name="نازنین" age="14" />
//     </div>
//   );
// }


// function AlertFunction() {
//   // const alert1 = () => {
//   //   alert("کلیک شد");
//   // }

//   return (
//     <button onClick={() => alert("po po po") }>click !</button>
//   );
// }


// function MissedGoal() {
// 	return <h1>MISSED!</h1>;
// }

// function MadeGoal() {
// 	return <h1>GOAL!</h1>;
// }

// function Goal(props) {
//   const isGoal = props.isGoal;
//   if (isGoal) {
//     return <MadeGoal/>;
//   }
//   return <MissedGoal/>;
// }

// function BigGoal(){
//   return(
//     <Goal isGoal = {true}></Goal>
//   )
// }




// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 &&
//         <h2>
//           You have {cars.length} cars in your garage.
//         </h2>
//       }
//     </>
//   );
// }

// const cars = ['Ford', 'BMW', 'Audi'];








function Counter() {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>increase</button>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter/>
  </React.StrictMode>
);

reportWebVitals();







