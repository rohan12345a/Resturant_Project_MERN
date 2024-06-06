import React from 'react'
import './Services.css'
import program1 from '../../assets/stayin1.jpg'
import program2 from '../../assets/dinein2.jpg'
import program3 from '../../assets/delevery01.jpg'


const Services = () => {
  return (
    <div className="programs">
        <div className="program">
            <img src={program1} alt="" />
            <div className="caption">
                <p>HOME STAYS</p>
            </div>
        </div>

        <div className="program">
            <img src={program2} alt="" />
            <div className="caption">
                <p>DINE IN</p>
            </div>
        </div>

        <div className="program">
            <img src={program3} alt="" />
            <div className="caption">
                <p>FOOD DELIVERY</p>
            </div>
        </div>
    </div>
  )
}

export default Services
