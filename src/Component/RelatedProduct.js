import React from "react";
import { items } from "./AllData";
import ProductItem from "./ProductItem";
function RelatedProduct({ item }) {
  const RelatedProductList = items.filter(
    (prod) => prod.category === item.category && prod.name != item.name
  );
  return (
    
    <div className="product">
      {RelatedProductList.map((item) => (
        <ProductItem item={item}/>
      ))}
    </div>
    
  );
}

export default RelatedProduct;
