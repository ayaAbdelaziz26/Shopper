import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>subscribe to our newletter and stay updated</p>
        <div className="newsletter_email">
            <input type="email" placeholder='your email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
