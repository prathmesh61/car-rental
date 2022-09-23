import React from 'react'
import './Faq.css'
import { FaqData } from '../../common/Faqdata'

import SingleFaq from '../SingleFaq/SingleFaq'


const Faq = () => {

    return (
        <section className='faq'>
            <div className="content">
                <p>FAQ</p>
                <h2>Frequently Asked Questions </h2>
            </div>
            <div className="faq_wrapper">
                {FaqData.map(({ ans, que, id }) => (
                    <SingleFaq key={id} ans={ans} que={que} />

                ))}
            </div>
        </section>
    )
}

export default Faq

// className={faq ? "ans" : "ans active-ans"}