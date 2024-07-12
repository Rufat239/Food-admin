import React from 'react'
import '../../Style/orderHistory.css'

function OrderHistory() {

  const historyList = [
    {
      id: '9177',
      customerId: '022401',
      time: '25 Dec 2021',
      deliveryAddress: '29 Eve street',
      amount: '$249.7',
      paymentMethod: 'Cash on Delivery',
      contact: '994-51-410-3130'

    },
    {
      id: '9178',
      customerId: '022401',
      time: '25 Dec 2021',
      deliveryAddress: '29 Eve street',
      amount: '$249.7',
      paymentMethod: 'Cash on Delivery',
      contact: '994-51-410-3130'
    },
    {
      id: '9179',
      customerId: '022401',
      time: '25 Dec 2021',
      deliveryAddress: '29 Eve street',
      amount: '$249.7',
      paymentMethod: 'Cash on Delivery',
      contact: '994-51-410-3130'
    }
  ]

  return (
    <div className='container'>
      <div className='tableContainer'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer ID</th>
              <th>Time</th>
              <th>Delivery Address</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {historyList.map((order, index) => (
              <tr key={index}>
                <td>
                  <div className='idContainer'>
                    <p>{order.id}</p>
                  </div>
                </td>
                <td>
                  <div className='customerID'>
                    <p>{order.customerId}</p>
                  </div>
                </td>
                <td>{order.time}</td>
                <td>{order.deliveryAddress}</td>
                <td>{order.amount}</td>
                <td>{order.paymentMethod}</td>
                <td>{order.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderHistory