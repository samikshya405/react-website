import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <>
    <div className='footerContainer'>
        <div className='footer'>
            <div className='newsletter'>
                <div>

                    <h1>Newsletter</h1>
                    <form>
                        <input placeholder='your@gmail.com'/>
                        <button className='btn-1'>Subscribe</button>
                        
                        
                    </form>
                </div>
            </div>


            <div className='copyright'>
                <p>Copyright 2023</p>
            </div>

        </div>

    </div>
    </>
  )
}

export default Footer