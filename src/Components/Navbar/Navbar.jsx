import React, { useContext, useState } from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import menue_icon from '../Assets/icon_menue.png'
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menue,setMenue]=useState("shop")
  const [toggle,setToggle]=useState(false);
  const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className="parent">
    <div className='navbar'>
      <div className="navbar_lside">
        <img src={logo} alt='My logo'/>
        <p>SHOPPER</p>
      </div>

      <ul className="center_side">
        <li onClick={()=>setMenue("shop")}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menue==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>setMenue("men")}><Link to='/men' style={{textDecoration:'none'}}>Men</Link>{menue==="men"?<hr/>:<></>}</li>
        <li onClick={()=>setMenue("women")}><Link to='/women' style={{textDecoration:'none'}}>Women</Link>{menue==="women"?<hr/>:<></>}</li>
        <li onClick={()=>setMenue("kids")}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{menue==="kids"?<hr/>:<></>}</li>
      </ul>

      <div className="navbar_rside">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="cart icon" /></Link>
        <div className="navbar_rside_count">{getTotalCartItems()}</div>
        <img src={menue_icon} alt="menue" onClick={()=>setToggle(!toggle)} className='menue_icon'/>
      </div>
    </div>
    <hr className='navbar_hr'/>

    <div className="navbar_menue">

      {toggle&&(
        <ul className='navbar_menue_list'>
        <li onClick={()=>setMenue("shop")}><Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menue==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>setMenue("men")}><Link to='/men' style={{textDecoration:'none'}}>Men</Link>{menue==="men"?<hr/>:<></>}</li>
        <li onClick={()=>setMenue("women")}><Link to='/women' style={{textDecoration:'none'}}>Women</Link>{menue==="women"?<hr/>:<></>}</li>
        <li onClick={()=>setMenue("kids")}><Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{menue==="kids"?<hr/>:<></>}</li>
        <Link to='/login'><button>Login</button></Link>
        </ul>
      )}
    </div>
    </div>
  )
}

export default Navbar
