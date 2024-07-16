import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Orders from '../Components/Orders/Orders'
import SubNavOrders from '../Components/Orders/SubNavOrders'

function OrdersPage() {
  return (
    <div>
        <NavBar/>
        <Orders/>
        <SubNavOrders/>
    </div>
  )
}

export default OrdersPage