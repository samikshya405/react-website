import React, { useContext, useEffect, useState } from 'react'
import { Cartitem } from './Context'
import Emptycart from './Emptycart'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'
import CartProduct from './CartProduct'
import './CartProduct.css'

function Cart() {
    const {cart,setcart,numberOfitem, setnumberOfitem}=useContext(Cartitem)
    const [total, settotal] = useState(0)
    const calculateTotal=()=>{
      const t = cart.reduce((a,b)=>{
        return a+(b.price*b.number)
      },0)
      settotal(t)

    }
   useEffect(()=>{
    calculateTotal()

   },[{cart}])

  return (
    <>
    {cart.length===0 ?<Emptycart/>:
      <div className='productContainer'>
        <h3>Items in Your bag</h3>
        <div className='cartOrder'>
        <div className='cartProduct'>
      {cart.map(item=>{
        return <CartProduct key={item.id} item={item}/>
        
      })}
      </div>
      <div className='orderSummary'>
        <h3>Order Summary</h3>
        <div className='text-end'>
          <h2>AU${total.toFixed(2)}</h2>
          <p>Incl gst</p>
          <button className='checkoutBtn'>Checkout Now</button>
          </div>
      </div>
      </div>
    </div>
    }
    
    
    
    </>
  )
}

export default Cart