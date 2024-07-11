import React from 'react'
import SubNavBarRestaurants from '../Components/SubNavBarRestaurants/SubNavBarRestaurants'
import CardRestaurants from '../Components/CardRestaurants/CardRestaurants'

function RestaurantsPage() {
  return (
    <div>
        <div className='restaurant-main'>
        <SubNavBarRestaurants/> 
        <CardRestaurants/>           
        </div>
    </div>
  )
}

export default RestaurantsPage