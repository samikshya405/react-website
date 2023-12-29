import React from 'react'
import './BannerTwo.css'
import { Link } from 'react-router-dom'

function BannerTwo() {
  return (
    <>
    <div className='bannerOneContainer'>
        <div className='banner'>
            
            <div className='photo-1'>

            </div>
            <div className='content'>
                <h2>Comfortable and Elegant Living</h2>
                <p>"Furnishing Dreams, Creating Comfort: Your Home, Your Heaven Experience the Art of Elegant Living with Us!"</p>
                <Link to='/categories'><button>Shop Now</button></Link>

            </div>

        </div>

    </div>
    
    </>
  )
}

export default BannerTwo