import React from 'react'
import CarList from '../../components/CarList/CarList'
import Faq from '../../components/Faq/Faq'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Offer from '../../components/Offer/Offer'
import Plan from '../../components/Plan/Plan'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='container'>

                <Hero />
                <Plan />
            </div>
            <Offer />
            <CarList />
            <div className="container">
                <Faq />
            </div>

        </>
    )
}

export default Home