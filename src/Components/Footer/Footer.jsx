import React from 'react'
import './footer.css'
import footer_logo from '../Assets/logo_big.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import instagram_icon from '../Assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_logo">
            <img src={footer_logo} alt="footer logo" />
            <p>SHOPPER</p>
        </div>

        <ul className="footer_links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="footer_social">
            <img src={instagram_icon} alt="instagram" />
            <img src={pintester_icon} alt="pinterest" />
            <img src={whatsapp_icon} alt="whatsapp" />
        </div>

        <hr/>
        <p className='copyright'>Copyright &copy; 2023 - All Rights Reserved</p>
    </div>
  )
}

export default Footer
