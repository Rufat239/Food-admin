import React, { useEffect, useState } from "react";
import "../../Style/orderHistory.css";
import ReusableTable from "../Reusable/Table.jsx";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";


function OrderHistory() {


  const [ordersData,setOrdersData]= useState([])
  const [loading,setLoading] = useState(true)

useEffect(() => {
  const getOrderHistoryDatas =async() => {
    const orderUrl = `https://test-foody-admin-default-rtdb.firebaseio.com/orders.json`
    try {
      const response = await axios.get(orderUrl)
      const data = response.data
      console.log(data, "orderdata")
      setOrdersData(Object.values(data))
      
    } catch (error) {
      console.log("error")
    }finally{
      setLoading(false)
    }
  }
  getOrderHistoryDatas()
},[])


  const columns = [
    {
      key: "id",
      title: "ID",
      render: (text, record) => (
        <div className="idContainer">
          <p className="id">{record.id?.substring(0, 4)}</p>
        </div>
      ),
    },
    {
      key: "customerId",
      title: "Customer ID",
      render: (text,record) => (
        <div className="customerID">
          <p className="id">{record.customerID ?.substring(0, 4)}</p>
        </div>
      ),
    },
    { key: "time", title: "Time" },
    { key: "deliveryAddress", title: "Delivery Address" },
    { key: "totalPrice", title: "Amount" },
    { key: "paymentMethod", title: "Payment Method" },
    { key: "contactNumber", title: "Contact" },
  ];



  return (
    <div className="containerHistory">
      {loading ? (
        <Loading/>
      ) : (
      <ReusableTable
        columns={columns}
        data={ordersData}
        className="orderHistoryTable"
      />
    )}
    </div>
  );
}
export default OrderHistory;
