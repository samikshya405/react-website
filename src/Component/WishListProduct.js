import React, { useContext, useState } from 'react'
import { Cartitem } from './Context'
import {faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WishListProduct({item}) {
  const {cart,setcart,wishlistCart, setwishlistCart}=useContext(Cartitem)
  const [itemNumber, setitemNumber] = useState(1)
  const handlePlus=(item)=>{
    setitemNumber(itemNumber+1)

  }
  const handleMinus=(item)=>{
    if(itemNumber>1){
      setitemNumber(itemNumber-1)
    }

  }
  const handleAdd=(item)=>{
    const itemIndex = [...cart].findIndex(prod=>prod.id===item.id)
    if(itemIndex>=0){
      const updatedCart=[...cart]
      updatedCart[itemIndex].number+=itemNumber
      setcart(updatedCart)
    }else{
      item.number=itemNumber
      const updatedCart=[...cart,item]
      setcart(updatedCart)
    }
    setitemNumber(1)
    alert('item added to your cart')
  }
  const handleDelete=(item)=>{
    const updatedWishList = [...wishlistCart].filter(prod=>prod.id!==item.id)
    setwishlistCart([...updatedWishList])
  }
  return (
    <div className='eachCartProduct'>
          <div className='itembox'>
            <img src ={item.img} alt={item.name}/>
            <div className='descriptionName wish'>
              <p>{item.name}</p>
              <div className="item-number">
                  <div className="minus" onClick={()=>handleMinus(item)} >
                    -
                  </div>
                  <div className="number-clicked">{itemNumber}</div>
                  <div className="plus" onClick={()=>handlePlus(item)}>
                    +
                  </div>
                </div>
                <div className='mt-3'><button onClick={()=>handleAdd(item)}>Add to Cart</button></div>

            </div>

          </div>
          <div className='pricebox'>
            <div>
              ${item.price*itemNumber}
            </div>
            <div className='text-end deletebtn' onClick={()=>handleDelete(item)}>
              <FontAwesomeIcon icon={faTrashCan}/>
            </div>

          </div>
        </div>
  )
}

export default WishListProduct