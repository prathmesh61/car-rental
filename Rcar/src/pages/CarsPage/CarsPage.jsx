import React from 'react'
import CarList from '../../components/CarList/CarList.jsx'

const CarsPage = () => {
    return (
        <section className="carspage">
            <div className="carspage_wrapper">
                <CarList />
            </div>
        </section>
    )
}

export default CarsPage