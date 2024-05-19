import React from 'react'
import './offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers_lside">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>

        <div className="offers_rside">
            <img src={exclusive_image} alt='image'/>
        </div>
      
    </div>
  )
}

export default Offers
