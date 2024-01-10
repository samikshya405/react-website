import React from 'react'
import './Trending.css'
import { items } from './AllData'
import { Link } from 'react-router-dom'
import ProductModal from './ProductModal'
import ProductItem from './ProductItem'

function Trending() {
  const filteredItems=items.filter(item=>item.id>8 && item.id<=12)


  return (
    <>

    <div className='productContainer'>
        <div>
        <p className='title'>Trending Now</p>
        </div>
        <div className='product'>
          {
            
            filteredItems.map(item=>{
              return (
              <div  key={item.id} >
              <ProductModal item ={item}/>
               <ProductItem item={item}/>
              </div>
              )
            })
          }
            
            
           
           
            
            
            
        </div>


    </div>
    </>
  )
}

export default Trending