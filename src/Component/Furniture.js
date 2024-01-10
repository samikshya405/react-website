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
                    return <div key={item.id} >
                    <ProductModal item={item} />
                   <ProductItem item ={item}/>
                  </div>
                })
            }
    
    
    
    </>
  )
}

export default Furniture