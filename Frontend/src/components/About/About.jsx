import React from 'react'
import './About.css';
import about_img from '../../assets/Aboutus2.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play-icon' onClick={()=>{
                setPlayState(true)
            }}/>

        </div>
        <div className="about-right">
            <h3>ABOUT RESTURANT</h3>
            <h2>Serving since 1990</h2>
            <p>
Welcome to Blue Origin - Where Flavor Meets Luxury
Since 1990,Blue Origin has been delighting taste buds with our delicious food and luxurious atmosphere. What started in Italy has now grown into a worldwide chain of restaurants, loved for our great food and classy hotels.
At Imperial Blue, our chefs put their hearts into every dish. From traditional recipes to modern twists, we make sure every bite is special.
Our restaurants are not just about food. They're about making you feel pampered and special. Whether you're having a quiet dinner or a big celebration, our hotels are the perfect place to relax and enjoy.
Come join us at Imperial Blue for a meal that's not just tasty but also a little bit fancy. We can't wait to make your visit unforgettable!</p>
        </div>

      
    </div>
  )
}

export default About
