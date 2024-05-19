import React from 'react'
import './descriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox_navigate">
            <div className='descriptionbox_navigate_left'>Description</div>
            <div className='descriptionbox_navigate_left'>Reviews (122)</div>
        </div>
    
        <div className="descriptionbox_box">
            <p>This is an e commerce websitr that helps users for shopping online easily
                with a secure way and transactions.
            </p>

            <p>
                You can see the latest brands and buy from variety types for men,women 
                and kids.
            </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
