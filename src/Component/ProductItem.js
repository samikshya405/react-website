import React from "react";


function ProductItem({item}) {
    
  return (
    <div data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id}`}>
      <img src={item.img} alt="" />
      <p className="productNameP">{item.name}</p>

      <p className="productPrice">${item.price}</p>
    </div>
  );
}

export default ProductItem;
