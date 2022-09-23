import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const Cartstate = createContext()
const CartSlice = ({ children }) => {
    const [cart, setCart] = useState([])
    return (
        <Cartstate.Provider value={{ cart, setCart }}>{children}</Cartstate.Provider>
    )
}

export default CartSlice