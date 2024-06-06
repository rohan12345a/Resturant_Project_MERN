import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'





const Testimonials = () => {
    const slider = useRef();
        let tx = 0;
        

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }

        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='Testimonials'>
        <img src={next_icon} alt="" className='next-btn'onClick={slideForward} />  
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />  
        <div className="slider">   
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Emily Miles</h3>
                            <span>Microsoft, MILAN</span>
                        </div>
                    </div>
                    <p>Blue Origin is more than just a restaurant; it's an experience of pure delight. From the moment you step through the door, you're enveloped in an atmosphere of elegance and warmth. The food, oh the food! Each dish is a masterpiece, bursting with flavor and crafted with such care. And let's not forget the impeccable service - every staff member goes above and beyond to ensure your 
                    dining experience is nothing short of perfection. 
                    Whether it's a romantic dinner for two or a celebratory feast with friends, Imperial Blue exceeds all expectations. It's not just a meal; it's a memory you'll cherish forever.</p>
                </div>
            </li>

            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Robert Kent</h3>
                            <span>NASDQ, ROME</span>
                        </div>
                    </div>
                    <p>Blue Origin is a culinary gem! From the moment you walk in, you're treated like royalty. The ambiance is inviting and luxurious, setting the stage for an unforgettable dining experience. The menu boasts a diverse selection of dishes, each one more delectable than the last. Every bite is a revelation, bursting with flavor and expertly presented. The staff are attentive and friendly, adding to the overall charm of the restaurant.
                         Whether it's a special occasion or a casual dinner, Imperial Blue never fails to impress.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>CLARA SWIFT</h3>
                            <span>GORDEN'S KITCHEN, NAPLES</span>
                        </div>
                    </div>
                    <p>I recently had the pleasure of dining at Blue Origin, and I must say, it was nothing short of spectacular. The attention to detail is evident in every aspect of the restaurant, from the elegant decor to the impeccable service. The menu offers a tantalizing array of options, catering to every palate. Each dish is a work of art, beautifully plated and bursting with flavor. The staff are knowledgeable and attentive, ensuring a seamless dining experience from start to finish.
                         Whether you're a seasoned foodie or just looking for a memorable meal, Imperial Blue is sure to exceed your expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>TONY STARK</h3>
                            <span>STARK INDUSTRIES,ROME</span>
                        </div>
                    </div>
                    <p>Blue Origin is a culinary masterpiece! My recent visit left me speechless - from the moment I stepped through the door, I was transported to a world of luxury and indulgence. The ambiance is sophisticated yet inviting, creating the perfect setting for a memorable meal. The menu is a culinary journey, with each dish expertly crafted and bursting with flavor. The attention to detail is unparalleled, from the presentation of the dishes to the impeccable service. 
                        Whether you're celebrating a special occasion or simply looking for a delicious meal, Imperial Blue is the ultimate dining destination.</p>
                </div>
            </li>
        </ul>
        </div> 
    </div>
  )
}

export default Testimonials
