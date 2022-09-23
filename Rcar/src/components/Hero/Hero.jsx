import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'


const Hero = () => {
    return (
        <main className='hero'>
            <div className="hero_wrapper">
                <div className="hero_left">
                    <span>Plan your trip now</span>
                    <h1>Save Big With Our<br /> Car<span className='red'> Rental</span> </h1>
                    <p>To contribute to positive change and achieve our sustainability<br /> goals with many extraordinary</p>
                    <div className="hero_cta">
                        <Link to='/CarsModle'> <button className='cta'>Book Now</button></Link>
                        <Link to='/CarsModle'><button className='black_cta'>Learn More</button></Link>
                    </div>
                </div>
                <div className="hero_right">
                    <img src="https://demo.xpeedstudio.com/carrental/home-v4/wp-content/uploads/sites/5/2020/06/banner_car.png" alt="HeroImg" className="hero_img" />
                </div>
            </div>
        </main>
    )
}

export default Hero