import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { Cartitem } from './Context'


function Navbar() {
  const {cart,setcart}= useContext(Cartitem)
  const carti=[...cart]
  const n=carti.reduce((a,b)=>{
    return a+b.number
  },0)
  return (
    <>
 
  
   <div className='navcontainer'>
    

   <nav className='nav'>
        <div className='logo'>HomePulse</div>
        <div className='navbar'>
        <div>
        <NavLink to='/'>HOME</NavLink>
        </div>
        <div>
        <NavLink to='/categories'>CATEGORIES</NavLink>
        </div>
        <div>
        <NavLink to='/wishlist'>WISHLIST</NavLink>
        </div>
        <div >
        <NavLink to='/cart' className='cart'><FontAwesomeIcon icon={faCartShopping}/><sup className='text-danger fw-bold'>{n}</sup></NavLink>
        </div>
        

        </div>
       
    </nav>
   
   </div>
   
    
    
    </>
  )
}

export default Navbar