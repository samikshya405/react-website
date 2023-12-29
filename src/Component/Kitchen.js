import React from 'react'
import { items } from './AllData'
import { Link } from 'react-router-dom'
import ProductModal from './ProductModal'

function Kitchen() {
    const kitchenItems =items.filter(item=>item.category.toLowerCase()==='kitchen')
  return (
    <>
    {
                kitchenItems.map(item=>{
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

export default Kitchen