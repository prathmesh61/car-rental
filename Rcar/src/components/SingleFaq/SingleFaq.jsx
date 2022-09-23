import React from 'react'
import { HiPlus } from 'react-icons/hi'
import { AiOutlineMinus } from 'react-icons/ai'
import { useState } from 'react'


const SingleFaq = ({ ans, que }) => {
    const [faq, setFaq] = useState(false)
    const faqhandle = () => setFaq(!faq)
    return (
        <div className="faq_box">
            <div className="faq_que" onClick={faqhandle}>
                <h3>{que}</h3>
                {faq ? <AiOutlineMinus size={25} /> : <HiPlus size={25} />}
            </div>
            {faq && <div className="ans">{ans}</div>}
        </div>
    )
}

export default SingleFaq