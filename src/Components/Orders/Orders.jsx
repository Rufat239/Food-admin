import React, { useEffect, useState } from "react";
import '../../Style/orders.css'
import Table from "../Reusable/Table.jsx";
import eye from '../../assets/SVG/eye.svg';
import icon from '../../assets/SVG/delete.svg'
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import axios from "axios";

function Orders() {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
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

  const [ordersData,setOrdersData]= useState([])

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
    }
  }
  getOrderHistoryDatas()
},[])


  const columns = [
    { key: "id", title: "ID" ,render: (text, record)=>(
      <div className="orders-id">
        <p className="orders-p">{record.id?.substring(0,4)}</p>
      </div>
    )},
    { key: "customerid", title: "Customer ID" ,render:(text, record)=>(
      <div className="orders-customerid">
        <p className="orders-p2">{record.customerID ?.substring(0, 4)}</p>
      </div>
    )},
    { key: "time", title: "Time" },
    { key: "deliveryAddress", title: "Delivery Address" ,render:(text)=>(
      <div className="orders-adress">
        <p className="ordersAdress-p">{text}</p>
      </div>
    )  },
    { key: "totalPrice", title: "Amount" },
    { key: "paymentMethod", title: "Payment Method" },
    { key: "contactNumber", title: "Contact" },
    {
      key: "actions",
      title: "",
      render: (text, record) => (
        <div className="orders-buttons">
          <button className="eyeButton"><img src={eye} alt="View" /></button>
          <button className="delete-Button" onClick={() => {handleShowDeleteModal(record.id)}}><img src={icon} alt="Delete" /></button>
        </div>
      ),
    },
  ];
  const handleShowDeleteModal = (id) => {
    setShowDeleteModal(id)
  }
  const handleCancel = () => {
    setShowDeleteModal(false)
  }
  return (
    <div className="orders">
      <Table columns={columns} data={ordersData} className="ordersList"/>
      {showDeleteModal && (
        <DeleteModal
        onCancel={handleCancel}/>
      )}
    </div>
  );
}
export default Orders;