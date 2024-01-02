import React, { createContext, useContext, useState } from 'react'
import { faHeart as regularHeart} from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Cartitem =createContext()
function Context({children}) {
    const [cart, setcart] = useState([])
    const [wishlistCart, setwishlistCart] = useState([])
    

  return (
    <Cartitem.Provider value={{cart,setcart,wishlistCart, setwishlistCart}}>
        {children}
    </Cartitem.Provider>
  )
}

export default Context