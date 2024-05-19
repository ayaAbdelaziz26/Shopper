import React, { useContext } from 'react'
import './cartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import {useEffect} from 'react'

const CartItems = () => {
    const {all_product,cartItems,removeFromCart,getTotalCartAmount} = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems_options">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
        {
            all_product.map((e)=>{
                if(cartItems[e.id]>0){
                    return <div key={e.id}>
                        <div className="cartitems_items cartitems_options">
                            <img src={e.image} alt="my product" className='cartitems_items_image'/>
                            <p>{e.name}</p>
                            <p>{e.new_price}</p>
                            <button className='cartitems_items_quantity'>{cartItems[e.id]}</button>
                            <p >{e.new_price*cartItems[e.id]}</p>
                            <img src={remove_icon} alt="remove icon" onClick={()=>{removeFromCart(e.id)}} className='cartitems_items_rmvicon'/>
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
              <div className="cartitems-total">
                <h1>Cart total</h1>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className="cartitems-total-item">
                <p>Shipping fee</p>
                <p>Free</p>
              </div>
              <hr/>
              <div className="cartitems-total-item">
                <p>Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <button>PROCEED TO CHECKOUT</button>
            </div>

            <div className="cartitems-promocode">
              <p>If you have a promocode enter it here</p>
              <div className="cartitems-promobox">
                <input type="text" placeholder='Enter promocode here' />
                <button>Submit</button>
              </div>
            </div>
      </div>
      </div>
  )
}

export default CartItems
