import React from "react";
import "./Product.css";
import { items } from "./AllData";
import { Link } from "react-router-dom";
import ProductModal from "./ProductModal";
import ProductItem from "./ProductItem";




function ProudProduct() {
  
  
  const filteredItems = items.filter((item) => item.id <= 8);

  return (
    <>
      <div className="productContainer">
        <div>
          <p className="title">Product we are proud of</p>
        </div>
        <div className="product">
          {filteredItems.map((item) => {
            return (
              <Link key={item.id}>
                <ProductModal item={item} />
               <ProductItem item ={item}/>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProudProduct;
