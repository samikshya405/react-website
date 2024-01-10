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
                    return <div key={item.id} >
                    <ProductModal item={item} />
                   <ProductItem item ={item}/>
                  </div>
                })
            }
    
    
    
    </>
  )
}

export default Kitchen