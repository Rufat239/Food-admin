import React from "react";
import '../../Style/orders.css'
import Table from "../Reusable/Table.jsx";
import eye from '../../assets/SVG/eye.svg';
import icon from '../../assets/SVG/delete.svg'

const data = [
  {id: 9177,customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876",amount: "$249.7",paymentMethod: "Cash On Delivery", contact: "994-51-410-3130",},
  {id: 9177,customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876",amount: "$249.7",paymentMethod: "Cash On Delivery", contact: "994-51-410-3130",},
  {id: 9177,customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876",amount: "$249.7",paymentMethod: "Cash On Delivery", contact: "994-51-410-3130",},
  {id: 9177,customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876",amount: "$249.7",paymentMethod: "Cash On Delivery", contact: "994-51-410-3130",},
  {id: 9177,customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876",amount: "$249.7",paymentMethod: "Cash On Delivery", contact: "994-51-410-3130",},
  {id: 9177,customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876",amount: "$249.7",paymentMethod: "Cash On Delivery", contact: "994-51-410-3130",},
  {id: 9177,customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876",amount: "$249.7",paymentMethod: "Cash On Delivery", contact: "994-51-410-3130",},
  {id: 9177,customerid: "022401", time: "25 Dec 2021", deliveryAddress: "29 Eve Street, 543 Evenue Road, Ny 87876",amount: "$249.7",paymentMethod: "Cash On Delivery", contact: "994-51-410-3130",},
];


const columns = [
  { key: "id", title: "ID" ,render: (text)=>(
    <div className="orders-id">
      <p className="orders-p">{text}</p>
    </div>
  )},
  { key: "customerid", title: "Customer ID" ,render:(text)=>(
    <div className="orders-customerid">
      <p className="orders-p2">{text}</p>
    </div>
  )},
  { key: "time", title: "Time" },
  { key: "deliveryAddress", title: "Delivery Address" ,render:(text)=>(
    <div className="orders-adress">
      <p className="ordersAdress-p">{text}</p>
    </div>
  )  },
  { key: "amount", title: "Amount" },
  { key: "paymentMethod", title: "Payment Method" },
  { key: "contact", title: "Contact" },
  {
    key: "actions",
    title: "",
    render: (text, record) => (
      <div className="orders-buttons">
        <button className="eyeButton"><img src={eye} alt="View" /></button>
        <button className="delete-Button"><img src={icon} alt="Delete" /></button>
      </div>
    ),
  },
];

function Orders() {
  return (
    <div className="orders">
      
      <Table columns={columns} data={data} className="ordersList"/>
    </div>
  );
}

export default Orders;