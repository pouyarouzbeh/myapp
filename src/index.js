import React from 'react';
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





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// جدا کردن منطق و داده‌ها: والد، مسئول مدیریت داده‌هاست؛ فرزند صرفاً رندرکننده‌ی UI است.

reportWebVitals();







