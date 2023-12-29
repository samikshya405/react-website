import React from 'react'
import './Product.css'
import { items } from './AllData'
import { Link } from 'react-router-dom'
import ProductModal from './ProductModal';

function Product() {
  const filteredItems = items.filter(item=> item.id<=8);

  return (
    <>
    <div className='productContainer'>
        <div>
        <p className='title'>Product we are proud of</p>
        </div>
        <div className='product'>
          {
            filteredItems.map(item=>{
              return <><Link key={item.id} data-bs-toggle="modal" data-bs-target={`#exampleModal${item.id}`} >
                        <img src={item.img} alt=''/>
                        <p className='productNameP'>{item.name}</p>

                        <p className='productPrice'>${item.price}</p>
                        <ProductModal item ={item}/>
                      </Link>
                      
                      </>
                            
                     
                      
                      
            })
          }



            
            
            
            
            
        </div>


    </div>
    
    </>
  )
}

export default Product