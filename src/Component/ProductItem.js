import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


function ProductItem({item}) {
  const [imageSrc, setImageSrc] = useState(item.img);

  const handleMouseOver=()=>{
    setImageSrc(item.img1)
  }
  const handleMouseOut=()=>{
    setImageSrc(item.img)
  }
  
  return (
    
    <div className="eachItem" >
      <Link to={`/productpage/${item.id}`}>
      <img src={imageSrc} alt="" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
      <p className="productNameP">{item.name}</p>
      </Link>
      <div className="shop-bag">

      <p className="productPrice">${item.price}</p>
      <FontAwesomeIcon icon={faCartPlus} className="icon" data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id}`}/>

      </div>
    </div>
    
  );
}

export default ProductItem;
