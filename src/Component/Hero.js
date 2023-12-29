import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
import './pic1.webp'

function Hero() {
  return (
    <>
    <div className='heroContainer'>
        <div className='box-1'>
            <Link to='/categories' className='pic-1'>
                <div className='h'>
                <p className='main-description'>Furniture</p>
                </div>
                

            </Link>
            <Link to='/categories' className='pic-2'>
                <div className='h'>
                    <p className='main-description'>Decoration</p>
                </div>
                
                
            </Link>
            <Link to='/categories' className='pic-3'>
                <div className='h'>
                    <p className='main-description'>Light</p>
                </div>
                    
            </Link>
            <Link to='/categories' className='pic-4'>
                <div className='h'>
                    <p className='main-description'>Kitchen</p>
                </div>
                
            </Link>
            
        </div>


    </div>
    </>
  )
}

export default Hero