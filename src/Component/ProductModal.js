import React, { useContext, useEffect, useState } from "react";
import "./ProductModal.css";
import { faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cartitem } from "./Context";
import { toast } from "react-toastify";

function ProductModal({ item }) {
  const {cart,setcart,wishlistCart, setwishlistCart}=useContext(Cartitem)
  const [numberOfitem, setnumberOfitem] = useState(1)
  const [heartIcon, setheartIcon] = useState(regularHeart)
  const displayHeart=()=>{
    if(wishlistCart.find(prod=>prod.id==item.id)){
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
    toast.success(`${item.name} added to your cart`, {
      position: 'top-right', // You can set the position (top-right, top-center, bottom-right, etc.)
      autoClose: 2000, // Time in milliseconds after which the toast will close automatically
      hideProgressBar: true, // Set to true if you want to hide the progress bar
      closeOnClick: true, // Close the toast on click
      pauseOnHover: true, // Pause the close timer when the user hovers over the toast
      draggable: true, // Allow the toast to be draggable
    });
   
    
    
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
      toast.success(`${item.name} added to your wishlist`, {
        position: 'top-right', // You can set the position (top-right, top-center, bottom-right, etc.)
        autoClose: 1000, // Time in milliseconds after which the toast will close automatically
        hideProgressBar: true, // Set to true if you want to hide the progress bar
        closeOnClick: true, // Close the toast on click
        pauseOnHover: true, // Pause the close timer when the user hovers over the toast
        draggable: true, // Allow the toast to be draggable
      });
      

    }else{
      setheartIcon(regularHeart)
      const wishCart =[...wishlistCart].filter(product=>product.id!==item.id)
      setwishlistCart(wishCart)
      toast.error(`${item.name} removed from your wishlist`, {
        position: 'top-right', // You can set the position (top-right, top-center, bottom-right, etc.)
        autoClose: 1000, // Time in milliseconds after which the toast will close automatically
        hideProgressBar: true, // Set to true if you want to hide the progress bar
        closeOnClick: true, // Close the toast on click
        pauseOnHover: true, // Pause the close timer when the user hovers over the toast
        draggable: true, // Allow the toast to be draggable
      });    }
    

  }

  return (
    <>
      <div
        className="modal fade"
        id={`exampleModal${item.id}`}
        tabIndex="-1"
        aria-labelledby={`exampleModalLabel${item.id}`}
        aria-hidden="true"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
      >
        <div className="modal-dialog customize modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {item.name} (AU${item.price})
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body middle">
              <div className="productImage">
                <img src={item.img} alt="" />
              </div>
              <div className="specs">
                <h2>{item.name}</h2>
                <p className="describe">
                  <span>Description: </span> {item.description}
                </p>
                <p className="describe">
                  <span>Size: </span> {item.size}{" "}
                </p>
                <p className="describe">
                  <span>Color: </span> {item.color.toUpperCase()}
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
                  ${(item.price * numberOfitem).toFixed(2)}
                </h4>
              </div>
            </div>
            <div className="modal-footer">
              <FontAwesomeIcon onClick={()=>handleIcon(item)} className="wishlistIcon" icon={heartIcon}/>
              <button
                type="button"
                className="addbtn"
                data-bs-dismiss="modal" 
                onClick={() => handleAdd(item,numberOfitem)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
