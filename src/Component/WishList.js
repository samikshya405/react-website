import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Wishlist.css'
import { Cartitem } from './Context'
import EmptyWishList from './EmptyWishList'
import WishListProduct from './WishListProduct'
import CartProduct from './CartProduct'

function WishList() {
  const {wishlistCart, setwishlistCart} = useContext(Cartitem)
  return (
    <>
    {wishlistCart.length==0 ? <EmptyWishList/> :
     <div className='productContainer'>
      <h3>My WishList</h3>
      <p>Save a list of things you want to buy later</p>
      <div className='cartOrder'>
      <div className='cartProduct'>
    {wishlistCart.map(item=>{
      return <WishListProduct key={item.id} item={item}/>
      
    })}
    </div>
    
    </div>
  </div>
    })
    
    </>
  )
}

export default WishList