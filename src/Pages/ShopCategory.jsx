import React from 'react'
import './CSS/shopcategory.css'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import all_product from '../Components/Assets/all_product'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  return (
    <div className='shopcategory'>
      <img src={props.banner} alt="banner" className='shopcategory_banner'/>
      <div className="shopcategory_indexsort">
        <p>
          <span>Showing 1-12 </span>out of 36 products
        </p>
        <div className="shopcategory_sort">
        Sort by<img src={dropdown_icon} alt="dropdown icon" />
      </div>
      </div>

      <div className="shopcategory_products">
        {
          all_product.map((item)=>{
            if(props.category===item.category){
            return <Item image={item.image} name={item.name} oldPrice={item.old_price} newPrice={item.new_price} key={item.id} id={item.id}/>
            }
            else{
              return null;
            }
          })
        }
      </div>
      <div className="shopcategory_loadmore">
        Explore more
      </div>
    </div>
  )
}

export default ShopCategory
