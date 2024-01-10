import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./AllData";
import { faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cartitem } from "./Context";
import RelatedProduct from "./RelatedProduct";

function ProductPage() {
  const { id } = useParams();
  const item = items.filter((item) => item.id == id);





  const {cart,setcart,wishlistCart, setwishlistCart}=useContext(Cartitem)
  const [numberOfitem, setnumberOfitem] = useState(1)
  const [heartIcon, setheartIcon] = useState(regularHeart)
  const displayHeart=()=>{
    if(wishlistCart.find(prod=>prod.id==item[0].id)){
      setheartIcon(solidHeart)
    }else{
      setheartIcon(regularHeart)
    }
  }
  useEffect(()=>{
    displayHeart()
  },[{wishlistCart}])
  const handleAdd = (item,numberOfitem) => {
    const existingCart = [...cart]
    const found =existingCart.findIndex(product=>product.id===item.id)
    if(found>=0){
      existingCart[found].number+=numberOfitem
      setcart([...existingCart])
    }else{
      item.number=numberOfitem
      const updateCartItem = [...cart, item];
      setcart(updateCartItem);

    }
    setnumberOfitem(1)
   
    
    
  };
  

  const handleMinus = () => {
    if (numberOfitem > 1) {
      setnumberOfitem(numberOfitem - 1);
    }
  };
  const handlePlus = () => {
    setnumberOfitem(numberOfitem + 1);
  };
  const handleIcon=(item)=>{

    if(heartIcon==regularHeart){
      setheartIcon(solidHeart)
      const wishCart =[...wishlistCart,item]
      setwishlistCart(wishCart)
      alert('Do you want to add item to your wishlist?')
      

    }else{
      setheartIcon(regularHeart)
      const wishCart =[...wishlistCart].filter(product=>product.id!==item.id)
      setwishlistCart(wishCart)
      alert('Do you want to remove item from your wishlist')
    }
    

  }


  return (
    <div className="productContainer">
      <div className=" middle mb-5">
        <div className="productImage">
          <img src={item[0].img} alt="" />
        </div>
        <div className="specs">
          <h2>{item[0].name}</h2>
          <p className="describe">
            <span>Description: </span> {item[0].description}
          </p>
          <p className="describe">
            <span>Size: </span> {item[0].size}{" "}
          </p>
          <p className="describe">
            <span>Color: </span> {item[0].color.toUpperCase()}
          </p>

          <div className="item-number">
                  <div className="minus" onClick={handleMinus}>
                    -
                  </div>
                  <div className="number-clicked">{numberOfitem}</div>
                  <div className="plus" onClick={handlePlus}>
                    +
                  </div>
                </div>
                <h4 className="totalPricePerItem">
                  ${(item[0].price * numberOfitem).toFixed(2)}
                </h4>
                <div style={{display:'flex', gap:"8px", alignItems:"center"}} >
              <button
                type="button"
                className="addbtn"
                
                onClick={() => handleAdd(item[0],numberOfitem)}
              >
                Add to Cart
              </button>
              <FontAwesomeIcon onClick={()=>handleIcon(item[0])} className="wishlistIcon" icon={heartIcon}/>
            </div>
           
          
        </div>
      </div>
      <div>
      <div>
          <p className="title">Related Product</p>
        </div>
              <RelatedProduct item={item[0]}/>
            </div>
    </div>
  );
}

export default ProductPage;
