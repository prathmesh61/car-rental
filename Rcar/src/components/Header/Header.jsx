import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { RiApps2Fill } from 'react-icons/ri'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useContext } from 'react'
import { Cartstate } from '../../Context/CartSlice'

const Header = () => {
    const { cart } = useContext(Cartstate)
    const [nav, setNav] = useState(false)
    const navClick = () => setNav(!nav)
    return (
        <header className='header'>

            <div className="header_wrapper">
                <Link to='/' className="header_logo">
                    <img src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/logo_v4.png" alt="logo" />
                </Link>
                <div className={nav ? "header_links active " : "header_links "}>
                    <Link to='/'>Home</Link>
                    <Link to='/CarsModle'>Car Models</Link>
                    <Link to='/Cart'><AiOutlineShoppingCart size={22} /><span className='cartItem'>{cart.length}</span></Link>
                </div>
                <div className="header_cta">
                    <button className='cta'><Link to='/CarsModle'>Book Car</Link></button>
                </div>
            </div>
            <div className="header_icon">
                <RiApps2Fill size={25} onClick={navClick} />
            </div>
        </header>
    )
}

export default Header