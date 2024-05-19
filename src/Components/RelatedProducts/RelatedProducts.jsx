import React from 'react'
import './relatedProducts.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />

      <div className="relatedproducts_items">
        {
            data_product.map((item)=>{
                return <Item key={item.id} image={item.image} name={item.name} oldPrice={item.old_price} newPrice={item.new_price} id={item.id}/>
            })
        }
      </div>
    </div>
  )
}

export default RelatedProducts
