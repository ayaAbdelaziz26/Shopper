import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero_lside">
            <h1>NEW ARRIVALS ONLY</h1>
            <div className='hero_lside_hand'>
            <p>new</p>
            <img src={hand_icon} alt="hand icon" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
            <button>Latest collection<img src={arrow} alt='arrow icon'/></button>
        </div>

        <div className="hero_rside">
            <img src={hero_image} alt="Girl photo" />
        </div>
      
    </div>
  )
}

export default Hero
