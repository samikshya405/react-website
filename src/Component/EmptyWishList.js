import React from 'react'
import { Link } from 'react-router-dom'

function EmptyWishList() {
  return (
    <>
    <div className='productContainer'>
        <div className='text-center'><img className='emptyWishlist' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ur1NU3QFGXC2UOD9CKffTubnsS-uCOSaxc2iW81Ht3iKqBc0X63aa8vFZBlIH9mCqXg&usqp=CAU' alt=''/></div>
        <h4 className='text-center pb-3'>Nothing is added to your WishList</h4>
        <div className='text-center'><Link to='/categories' ><button className='px-3 py-2' >Keep Browsing</button></Link></div>

    </div>
    
    </>
  )
}

export default EmptyWishList