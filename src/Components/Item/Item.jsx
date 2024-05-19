import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt="my image" onClick={window.scroll(0,0)}/></Link>
      <p className='item_name'>{props.name}</p>
      <div className="item_prices">
        <p className='item_prices_old'>{props.newPrice}$</p>
        <p>{props.oldPrice}$</p>
      </div>
    </div>
  )
}

export default Item