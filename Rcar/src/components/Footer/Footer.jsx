import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer_wrapper container">
                <div className="footer_contact">
                    <div className="footer_logo">
                        <h2>Car Rental </h2>
                        <p>Use securing confined his shutters. Delightful as he it acceptance an solicitude discretion.</p>
                    </div>
                    <div className="footer_phone">
                        <p>Mo. (123) 498-4600</p>
                        <p>Email: example@carrental.com</p>
                    </div>

                </div>
                <div className="footer_timing">
                    <h2>Working Hours </h2>
                    <h3>Mon - Fri: 09:00AM - 09:00PM </h3>
                    <h3>Sat: 09:00AM - 07:00PM </h3>
                    <h3>Sun: Closed </h3>
                </div>
            </div>
            <div className="footer_rights">
                <h3>©2020 Car Rental. All Rights Reserved </h3>

            </div>
        </footer>
    )
}

export default Footer