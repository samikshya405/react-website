import React, { useState } from 'react'
import { items } from './AllData' 
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './Categories.css'
import ProductModal from './ProductModal'
import Furniture from './Furniture'
import Kitchen from './Kitchen'


function Categories() {
    const [allItems, setallItems] = useState([...items])
    const handleFurniture=()=>{
        const furnitureItems= items.filter(item=>item.category.toLowerCase()==='furniture')
        setallItems([...furnitureItems])

    }
    const handleDecoration=()=>{
        const decorationItems= items.filter(item=>item.category.toLowerCase()==='decoration')
        setallItems([...decorationItems])

    }
    const handleKitchen=()=>{
        const kitchenItems= items.filter(item=>item.category.toLowerCase()==='kitchen')
        setallItems([...kitchenItems])

    }
    const handleLight=()=>{
        const lightItems= items.filter(item=>item.category.toLowerCase()==='light')
        setallItems([...lightItems])

    }
    const handleAll=()=>{
        const everyItems= [...items]
        setallItems([...everyItems])

    }


  return (
    <>
    <div className='productContainer'>
        
        <div>
            <div className='back'>
                <Link to='/'><FontAwesomeIcon icon={faArrowLeft} /> Home</Link>
            </div>
        <div className='choosebtn'>
            <NavLink className='all' onClick={handleAll}>All</NavLink>
            <NavLink className='furniture' onClick={handleFurniture}>Furniture</NavLink>
            <NavLink className='decoration' onClick={handleDecoration}>decoration</NavLink>
            <NavLink className='kitchen' onClick={handleKitchen}>kitchen</NavLink>
            <NavLink className='light' onClick={handleLight}>light</NavLink>
        </div>
        </div>
        <div className='product'>
           {
                allItems.map(item=>{
                    return <Link key={item.id} data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id}`}>
                                <img src={item.img} alt=''/>
                                <p className='productNameP'>{item.name}</p>

                                <p className='productPrice'>${item.price}</p>
                                <ProductModal item ={item}/>
                            </Link>
                }) 
            }
            
              
        </div>
        


    </div>
    </>
  )
}

export default Categories