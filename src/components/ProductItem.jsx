import React from 'react';

function ProductItem({ name, price, description , productStyle}) {
  return (
    <div className={`product-item ${productStyle}`}>
      <h2>{name}</h2>
      <p>قیمت: ${price}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProductItem;
