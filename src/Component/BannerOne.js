import React from 'react'
import './BannerOne.css'
import { Link } from 'react-router-dom'


function BannerOne() {
  return (
    <>
    <div className='bannerOneContainer'>
        <div className='banner'>
            <div className='content'>
                <h2>Our Signature Style</h2>
                <p>"Furnishing Dreams, Creating Comfort: Your Home, Your Heaven Experience the Art of Elegant Living with Us!"</p>
                <Link to='/categories'><button>Shop Now</button></Link>

            </div>
            <div className='photo'>

            </div>
            

        </div>

    </div>
    </>
  )
}

export default BannerOne