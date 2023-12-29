import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <>
   <div className='navcontainer'>

   <nav className='nav'>
        <div className='logo'>Forever</div>
        <div className='navbar'>
        <div>
        <Link to='/categories'>CATEGORIES</Link>
        </div>
        <div>
        <Link>PRODUCT PAGE</Link>
        </div>
        <div >
        <Link className='cart'><FontAwesomeIcon icon={faCartShopping} /><span></span></Link>
        </div>
        

        </div>
    </nav>
   </div>
    
    
    </>
  )
}

export default Navbar