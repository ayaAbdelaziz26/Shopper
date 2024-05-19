import React from 'react'
import './popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className="popular_item">
        {
            data_product.map(item=>{
                return <Item image={item.image} name={item.name} oldPrice={item.old_price} newPrice={item.new_price} key={item.id} id={item.id}/>
            })
        }
        </div>
    </div>
  )
}

export default Popular
