import React from 'react'
import { useContext } from 'react'
import { Cartstate } from '../../Context/CartSlice'
import './CartPage.css'

const CartPage = () => {
    const { cart, setCart } = useContext(Cartstate)
    return (
        <section className="cart">
            {cart.map((item) => (
                <div className="cartContainer">
                    <div className="cartImg">
                        <img src={item.imgUrl} alt="" />
                    </div>
                    <div className="cartCar_name">
                        <h3>{item.carName}</h3>
                    </div>
                    <div className="carlist_price">
                        <h2>${item.price}<span>/per day</span></h2>

                        {cart.includes(item) ? (<button onClick={() => setCart(cart.filter((c) => c.id !== item.id))} className="black_cta carlist_cta">Remove</button>) : (<button className="black_cta carlist_cta" onClick={() => setCart([...cart, item])}>Book</button>)}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default CartPage