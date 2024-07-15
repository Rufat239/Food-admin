import React from "react";
import "../../Style/orderHistory.css";
import ReusableTable from "../Reusable/Table.jsx";



function OrderHistory() {
  const columns = [
    {
      key: 'id', title: 'ID', render: (text) => (
        <div className="idContainer">
          <p className="id">{text}</p>
        </div>
      )
    },
    {
      key: 'customerId', title: 'Customer ID', render: (text) => (
        <div className="customerID">
          <p className="id">{text}</p>
        </div>
      )
    },
    { key: "time", title: "Time" },
    { key: "deliveryAddress", title: "Delivery Address" },
    { key: "amount", title: "Amount" },
    { key: "paymentMethod", title: "Payment Method" },
    { key: "contact", title: "Contact" },
  ];



  const historyList = [
    {
      id: "9177",
      customerId: "022401",
      time: "25 Dec 2021",
      deliveryAddress: "29 Eve street",
      amount: "$249.7",
      paymentMethod: "Cash on Delivery",
      contact: "994-51-410-3130",
    },
    {
      id: "9178",
      customerId: "022401",
      time: "25 Dec 2021",
      deliveryAddress: "29 Eve street",
      amount: "$249.7",
      paymentMethod: "Cash on Delivery",
      contact: "994-51-410-3130",
    },
    {
      id: "9179",
      customerId: "022401",
      time: "25 Dec 2021",
      deliveryAddress: "29 Eve street",
      amount: "$249.7",
      paymentMethod: "Cash on Delivery",
      contact: "994-51-410-3130",
    },
  ];

  return (
    <div className="container">
      <div className="tableContainer">
        <ReusableTable
          columns={columns}
          data={historyList}
          className="orderHistoryTable"
        />
      </div>
    </div>
  );
}
export default OrderHistory;