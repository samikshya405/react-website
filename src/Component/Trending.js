import React from 'react'
import './Trending.css'
import { items } from './AllData'
import { Link } from 'react-router-dom'
import ProductModal from './ProductModal'

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

export default Trending