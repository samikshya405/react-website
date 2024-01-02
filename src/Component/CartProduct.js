import React, { useContext } from 'react'
import { Cartitem } from './Context'
import {faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartProduct({item}) {
  const {cart,setcart,numberOfitem, setnumberOfitem}=useContext(Cartitem)
  const handlePlus=(item)=>{
    item.number+=1
    setcart([...cart])

  }
  const handleMinus=(item)=>{
    if(item.number>1){
      item.number-=1
      setcart([...cart])
    }

  }
  const handleDelete=(item)=>{
    const updatedCart = [...cart].filter(prod=>prod.id!==item.id)
    setcart([...updatedCart])
  }
  return (
    <div className='eachCartProduct'>
          <div className='itembox'>
            <img src ={item.img}/>
            <div className='descriptionName'>
              <p>{item.name}</p>
              <div className="item-number">
                  <div className="minus" onClick={()=>handleMinus(item)} >
                    -
                  </div>
                  <div className="number-clicked">{item.number}</div>
                  <div className="plus" onClick={()=>handlePlus(item)}>
                    +
                  </div>
                </div>

            </div>

          </div>
          <div className='pricebox'>
            <div>
              ${item.price*item.number}
            </div>
            <div className='text-end deletebtn' onClick={()=>handleDelete(item)}>
              <FontAwesomeIcon icon={faTrashCan}/>
            </div>

          </div>
        </div>
  )
}

export default CartProduct