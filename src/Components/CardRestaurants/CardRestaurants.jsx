import React from 'react'
import Editsvg from '../SVG/edit.svg' 
import Deletesvg from '../SVG/delete.svg'
import Style from '../../Style/cardrestaurants.css'

function CardRestaurants() {
  return (
    <div>
        <div className='card'>
            <div className='card-image'>
                <img src="https://logowik.com/content/uploads/images/pizza-papa-johns2504.logowik.com.webp" alt="" />
            </div>
            <div className='card-info'>
                <h5>Papa John’s</h5>
                <p>Pizza</p>
            </div>
            <div className='card-edit'>
                <img src={Editsvg} alt="" />
                <img src={Deletesvg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default CardRestaurants