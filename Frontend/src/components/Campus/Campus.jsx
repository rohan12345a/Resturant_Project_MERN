import React from 'react'
import './Campus.css';
import gallery_1 from '../../assets/g1.jpg'
import gallery_2 from '../../assets/g2.jpg'
import gallery_3 from '../../assets/g3.jpg'
import gallery_4 from '../../assets/g4.jpg'


const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />

            </div>
                  
    </div>
  )
}

export default Campus
