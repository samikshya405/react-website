import React, { useState } from "react";
import { items } from "./AllData";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Categories.css";
import ProductModal from "./ProductModal";
import ProductItem from "./ProductItem";

function Categories() {
  const [allItems, setallItems] = useState([...items]);
  const [productsTitle, setproductsTitle] = useState("All")
  const handleFurniture = () => {
    const furnitureItems = items.filter(
      (item) => item.category.toLowerCase() === "furniture"
    );
    setallItems([...furnitureItems]);
    setproductsTitle("Furniture")
  };
  const handleDecoration = () => {
    const decorationItems = items.filter(
      (item) => item.category.toLowerCase() === "decoration"
    );
    setallItems([...decorationItems]);
    setproductsTitle("Decoration")
  };
  const handleKitchen = () => {
    const kitchenItems = items.filter(
      (item) => item.category.toLowerCase() === "kitchen"
    );
    setallItems([...kitchenItems]);
    setproductsTitle('Kitchen')
  };
  const handleLight = () => {
    const lightItems = items.filter(
      (item) => item.category.toLowerCase() === "light"
    );
    setallItems([...lightItems]);
    setproductsTitle("Light")
  };
  const handleAll = () => {
    const everyItems = [...items];
    setallItems([...everyItems]);
    setproductsTitle("All")
  };

  return (
    <>
      <div className="productContainer">
        <div>
          <div className="back">
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} /> Home
            </Link>
          </div>
          <h1 className="text-center">{productsTitle}</h1>
          <div className="choosebtn">
            <Link className="all" onClick={handleAll}>
              All
            </Link>
            <Link className="furniture" onClick={handleFurniture}>
              Furniture
            </Link>
            <Link className="decoration" onClick={handleDecoration}>
              decoration
            </Link>
            <Link className="kitchen" onClick={handleKitchen}>
              kitchen
            </Link>
            <Link className="light" onClick={handleLight}>
              light
            </Link>
          </div>
        </div>
        
        <div className="product">
          {allItems.map(item => {
            return (
              <div  key={item.id} >
              <ProductModal item ={item}/>
               <ProductItem item={item}/>
              </div>
              )
          })}
        </div>
      </div>
    </>
  );
}

export default Categories;
