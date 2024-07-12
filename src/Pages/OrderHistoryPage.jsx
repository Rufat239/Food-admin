import React from 'react'
import SubNavOrderHistory from '../Components/OrderHistory/SubNavOrderHistory'
import OrderHistory from '../Components/OrderHistory/OrderHistory'
import NavBar from "../Components/NavBar/NavBar"

function OrderHistoryPage() {
  return (
    <div>
      <NavBar/>
        <SubNavOrderHistory/>
        <OrderHistory/>
    </div>
  )
}

export default OrderHistoryPage