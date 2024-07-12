import React from 'react'
import style from '../Orders/Orders.module.css'


const data= [
    { id: 9177, customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876", amount: "$249.7", paymentMethod: "Cash On Delivery", contact: "994-51-410-3130"},
    { id: 9177, customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876", amount: "$249.7", paymentMethod: "Cash On Delivery", contact: "994-51-410-3130"},
    { id: 9177, customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876", amount: "$249.7", paymentMethod: "Cash On Delivery", contact: "994-51-410-3130"},
    { id: 9177, customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876", amount: "$249.7", paymentMethod: "Cash On Delivery", contact: "994-51-410-3130"},
    { id: 9177, customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876", amount: "$249.7", paymentMethod: "Cash On Delivery", contact: "994-51-410-3130"},
    { id: 9177, customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876", amount: "$249.7", paymentMethod: "Cash On Delivery", contact: "994-51-410-3130"},
    { id: 9177, customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876", amount: "$249.7", paymentMethod: "Cash On Delivery", contact: "994-51-410-3130"},
    { id: 9177, customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876", amount: "$249.7", paymentMethod: "Cash On Delivery", contact: "994-51-410-3130"},
  ];

function Orders() {
  return (
    <div className={style.orders}>
      <div className={style.ordersName}>
        <h1>Orders</h1>
      </div>
        <table className={style.ordersList}>
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
            {data.map((item,index)=>(
              <tr key={index}>
               <td>{item.id}</td>
               <td>{item.customerid}</td>
               <td>{item.time}</td>
               <td>{item.deliveryAddress}</td>
               <td>{item.amount}</td>
               <td>{item.paymentMethod}</td>
               <td>{item.contact}</td>
               <td>
                {/* <button><img src={Eye} alt="" /></button>
                <button><img src={Vector} alt="" /></button> */}
               </td>
              </tr>
            ))}
          </tbody>
        </table>
    
    </div>
    
  )
}

export default Orders