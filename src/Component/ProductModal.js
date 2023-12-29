import React, { useEffect, useState } from 'react'
import './ProductModal.css'

function ProductModal({item}) {
    const [cartItem, setcartItem] = useState([])
    const [eachItemNumber, seteachItemNumber] = useState(1)
    const handleAdd=(item)=>{
        const updateCartItem = [...cartItem,item]
        setcartItem(updateCartItem)
        
    }
    const handleMinus=()=>{
        if(eachItemNumber>1){
            seteachItemNumber(eachItemNumber-1)
        }
    }
    const handlePlus=()=>{
        seteachItemNumber(eachItemNumber+1)
    }

  return (
    <>
    <div className="modal fade" id={`exampleModal${item.id}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${item.id}`} aria-hidden="true">
        <div className="modal-dialog customize modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{item.name} (AU${item.price})</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body middle">
                    <div className="productImage">
                        <img  src={item.img} alt=''/>
                    </div>
                    <div className="specs">
                        <h2>{item.name}</h2>
                        <p className="describe"><span>Description: </span> {item.description}</p>
                        <p className="describe"><span>Size: </span> {item.size} </p>
                        <p className="describe"><span>Color: </span> {item.color.toUpperCase()}</p>

                            
                        <div className="item-number">
                            <div className="minus" onClick={handleMinus}>-</div>
                            <div className="number-clicked">{eachItemNumber}</div>
                            <div className="plus" onClick={handlePlus}>+</div>
                        </div>
                        <h4 className='totalPricePerItem'>${(item.price * eachItemNumber).toFixed(2)}</h4>
                    </div>
                       
                </div>
                <div className="modal-footer">
                    <button type="button" className="addbtn" data-bs-dismiss="modal" onClick={()=>handleAdd(item)}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default ProductModal