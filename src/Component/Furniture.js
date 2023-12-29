import React from 'react'
import { items } from './AllData'
import { Link } from 'react-router-dom'
import ProductModal from './ProductModal'

function Furniture() {
    const furnitureItems =items.filter(item=>item.category.toLowerCase()==='furniture')
  return (
    <>
    {
                furnitureItems.map(item=>{
                    return <Link key={item.id} data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id}`}>
                                <img src={item.img} alt=''/>
                                <p className='productNameP'>{item.name}</p>

                                <p className='productPrice'>${item.price}</p>
                                <ProductModal item ={item}/>
                            </Link>
                })
            }
    
    
    
    </>
  )
}

export default Furniture