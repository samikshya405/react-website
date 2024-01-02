import React from 'react'
import { Link } from 'react-router-dom'

function Emptycart() {
  return (
    <>
    <div className='productContainer'>
        <div className='text-center'><img className='emptyWishlist' src='https://cdn-icons-png.flaticon.com/512/11329/11329060.png' alt=''/></div>
        <h4 className='text-center pb-3'>Your cart is Empty</h4>
        <div className='text-center'><Link to='/categories' ><button className='px-3 py-2' >Shop Now</button></Link></div>

    </div>
    
    </>
  )
}

export default Emptycart