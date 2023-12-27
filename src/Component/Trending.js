import React from 'react'
import './Trending.css'
import { Link } from 'react-router-dom'

function Trending() {
  return (
    <>
    <div className='productContainer'>
        <div>
        <p className='title'>Trending Now</p>
        </div>
        <div className='product'>
            
            
           
           
            <Link>
            <img src='https://www.ikea.com/au/en/images/products/blandsallad-chopping-board-bamboo__0992064_pe819785_s5.jpg?f=xl' alt=''/>
            <p>BLANDSALLAD</p>

            <p className='productPrice'>$<span>15</span></p>
            </Link>
            <Link>
            <img src='https://www.ikea.com/au/en/images/products/fejka-artificial-potted-plant-in-outdoor-palm__0797076_pe766755_s5.jpg?f=xl' alt=''/>
            <p>FEJKA</p>

            <p className='productPrice'>$<span>23</span></p>
            </Link>
            <Link>
            <img src='https://www.ikea.com/au/en/images/products/eftertaenka-decorative-hourglass-clear-glass-sand__1006432_pe825811_s5.jpg?f=xl' alt=''/>
            <p>HOURGLASS</p>

            <p className='productPrice'>$<span>12</span></p>
            </Link>
            <Link>
            <img src='https://www.ikea.com/au/en/images/products/tvaerhand-table-lamp-black-bamboo__1027181_pe834780_s5.jpg?f=xl' alt=''/>
            <p>LAMP</p>

            <p className='productPrice'>$<span>15.23</span></p>
            </Link>
            
        </div>


    </div>
    </>
  )
}

export default Trending