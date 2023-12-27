import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <>
    <div className='productContainer'>
        <div>
        <p className='title'>Product we are proud of</p>
        </div>
        <div className='product'>
            <Link>
            <img src='https://www.ikea.com/au/en/images/products/bondholmen-2-seat-sofa-outdoor-grey-stained-froesoen-duvholmen-dark-grey__0806161_pe769826_s5.jpg?f=xl' alt=''/>
            <p className='productName'>BONDHOLEM</p>

            <p className='productPrice'>$<span className='price'>395.23</span></p>
            </Link>
            <Link>
            <img src='https://www.ikea.com/au/en/images/products/naemmaroe-sun-lounger-outdoor-light-brown-stained__1138752_pe880052_s5.jpg?f=xl' alt=''/>
            <p>BONDHOLEM</p>

            <p className='productPrice'>$<span>395.23</span></p>
            </Link>
            <Link>
            <img src='https://www.ikea.com/au/en/images/products/taernaby-table-lamp-dimmable-anthracite__1188962_pe899634_s5.jpg?f=xl' alt=''/>
            <p>BONDHOLEM</p>

            <p className='productPrice'>$<span>395.23</span></p>
            </Link>
            <Link>
            <img src='https://www.ikea.com/au/en/images/products/knoxhult-base-cabinet-with-doors-and-drawer-white__0630760_pe694888_s5.jpg?f=xl' alt=''/>
            <p>KNOXHULT</p>

            <p className='productPrice'>$<span>370</span></p>
            </Link>
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

export default Product