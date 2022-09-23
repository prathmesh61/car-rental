import React from 'react'
import './Plan.css'
import { PlanData } from '../../common/PlanData.jsx'


const Plan = () => {
    return (
        <section className='plan'>
            <div className="plan_wrapper">
                <div className="content">
                    <span>Plan your trip now</span>
                    <h2>Quick & easy car rental </h2>
                </div>
                <div className="plan_container">
                    {PlanData.map((item) => (
                        <div className="plan_card">
                            <img src={item.icon} />
                            <h3>{item.title}</h3>
                            <p>{item.desc.slice(0, 70) + '...'}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Plan