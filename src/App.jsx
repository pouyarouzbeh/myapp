import React from "react";
import "./App.css";
// import Card from "./components/Card";
import ProductList from "./components/ProductList";

function App(){
  // return(
  //   <div>
  //     <Card title ="کارت اول" description="این کارت اول من است . چه جالب !" />      
  //     <Card title ="کارت دوم" description="این کارت دوم من است . چه جالب !" />
  //     <Card title ="کارت سوم" description="این کارت سوم من است . چه جالب !" />
  //   </div>
  // )

  // const numbers = [1, 2, 3, 4, 5];
  // const even = numbers.filter(num => num % 2 === 0);
  // console.log(even); 


  // const numbers2 = [1, 2, 3 , 6];
  // const doubled = numbers2.map(num => num * 2);
  // console.log(doubled);

  const products = [
    {
      id: 1,
      name: 'Laptop',
      price: 1500,
      description: 'A high-performance laptop for everyday use',
      productStyle : 'bg-laptop'
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 800,
      description: 'Powerful smartphone with amazing camera',
      productStyle : 'bg-smartphone'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 200,
      description: 'Noise-cancelling headphones for better focus',
      productStyle : 'bg-headphones'
    }
  ];

  return (
    <div>
      <h1>فروشگاه محصولات</h1>
      <ProductList items={products} />
    </div> 
  );
}


export default App;

