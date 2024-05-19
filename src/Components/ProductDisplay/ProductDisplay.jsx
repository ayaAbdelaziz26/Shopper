import React, { useContext } from 'react'
import './productDisplay.css'
import start_icon from '../Assets/star_icon.png'
import start_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { useEffect } from 'react'

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
    
  return (
    <div className='productdisplay'>
      <div className="productdisplay_left">
        <div className="productdisplay_left_one">
            <img src={product.image} alt="image" />
            <img src={product.image} alt="image" />
            <img src={product.image} alt="image" />
            <img src={product.image} alt="image" />
        </div>
        <div className="productdisplay_left_two">
            <img src={product.image} alt="my product" />
        </div>
      </div>

      <div className="productdisplay_right">
        <h1>{product.name}</h1>
        <div className="productdisplay_right_stars">
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_icon} alt="" />
            <img src={start_dull_icon} alt="" />
            <p>(122)</p>
        </div>

        <div className="productdisplay_right_prices">
            <p className='old_one'>{product.old_price}$</p>
            <p>{product.new_price}$</p>
        </div>

        <div className="productdisplay_right_decription">
            A lightweeight, usually knitted, pullover shirt, close fitting and with 
            a round neckline and short sleeves , worn as an undershirt or outer
            garment
        </div>

        <div className="productdisplay_right_size_parent">
            <h1>Select size</h1>
        <div className="productdisplay_right_size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
        </div>
        <button onClick={()=>addToCart(product.id)}>Add to cart</button>
        <p>Category: {product.category}</p>
        <p>Tags: Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
