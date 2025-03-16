import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ items }) {
  return (
    <div className="product-list">

      {items.map(product => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
          description={product.description}
          productStyle={product.productStyle}
        />
      ))}      
    </div>
  );
}

export default ProductList;
