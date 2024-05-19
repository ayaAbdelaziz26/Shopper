import React from 'react'
import './newCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='newcollection'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="newcollection_items">
            {
                new_collection.map(item=>{
                    return <Item key={item.id} image={item.image} name={item.name} oldPrice={item.old_price} newPrice={item.new_price} id={item.id}/>
                })
            }
        </div>
      
    </div>
  )
}

export default NewCollections
