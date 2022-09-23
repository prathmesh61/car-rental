import React from 'react'
import { Link } from 'react-router-dom'
import './Offer.css'

const Offer = () => {
    return (
        <section className="offer">
            <div className="offer_wrapper">
                <div className="img_overlay">
                    <img src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/cta_car_action.png" alt="offerImg" className="offerImg" />
                    <div className="offer_content">
                        <div className="offer_content-box">
                            <h2>Save big with our cheap<br /> car rental! </h2>
                            <p>Top Airports. Local Suppliers. 24/7 Support.</p>
                        </div>
                        <Link to='/CarsModle'> <button className="cta">Book Ride</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer