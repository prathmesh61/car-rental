import React, { useContext } from 'react'
import './CarList.css'
import { carData } from '../../common/CarData.jsx'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Cartstate } from '../../Context/CartSlice'

const CarList = () => {

    const arrowLeft = () => {
        var arrowLeft = document.getElementById('slide')
        arrowLeft.scrollLeft = arrowLeft.scrollLeft - 280
    }
    const arrowRight = () => {
        var arrowLeft = document.getElementById('slide')
        arrowLeft.scrollLeft = arrowLeft.scrollLeft + 280
    }

    const { cart, setCart } = useContext(Cartstate)

    return (
        <section className='carlist'>
            <div className="content">
                <p>All inclusive pricing</p>
                <h2>Best valued deals you will ever find </h2>
            </div>
            <MdOutlineArrowBackIosNew size={40} id='arrowLeft' className='arrowLeft' onClick={arrowLeft} />
            <div className="carlist_wrapper" id='slide'>
                {carData.map((item) => (
                    <div className="carlist_container" key={item.id}>
                        <Link to={`/car/${item.carName}`}>
                            <div className="carlist_img">
                                <img src={item.imgUrl} alt="" />
                            </div>
                            <div className="carlist_name">
                                <h3>{item.carName}</h3>
                            </div>
                            <div className="carlist_brand">
                                <h4>{item.brand}</h4>
                                <h4>{item.model}</h4>
                            </div>
                            <div className="carlist_fetures">
                                <h4>{item.seatType}</h4>
                                <h4>{item.automatic}</h4>
                            </div>
                        </Link>
                        <div className="carlist_price">
                            <h2>${item.price}<span>/per day</span></h2>

                            {cart.includes(item) ? (<button onClick={() => setCart(cart.filter((c) => c.id !== item.id))} className="black_cta carlist_cta">Remove</button>) : (<button className="black_cta carlist_cta" onClick={() => setCart([...cart, item])}>Book</button>)}
                        </div>
                    </div>
                ))}
            </div>
            <MdOutlineArrowForwardIos size={40} id='arrowRight' className='arrowRight' onClick={arrowRight} />
        </section>
    )
}

export default CarList