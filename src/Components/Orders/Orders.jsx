import React, { useEffect, useState } from "react";
import '../../Style/orders.css';
import Table from "../Reusable/Table.jsx";
import icon from '../../assets/SVG/delete.svg';
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import axios from "axios";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

function Orders() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [visibleContacts, setVisibleContacts] = useState({}); 

  // Fetch data from Client
  const [ordersData, setOrdersData] = useState([]);

  useEffect(() => {
    const getOrderHistoryDatas = async () => {
      const orderUrl = `https://test-foody-admin-default-rtdb.firebaseio.com/orders.json`;
      try {
        const response = await axios.get(orderUrl);
        const data = response.data;
        console.log(data, "orderdata");
        setOrdersData(Object.values(data));
      } catch (error) {
        console.log("error");
      }
    };
    getOrderHistoryDatas();
  }, []);

  // Toggle visibility for a specific contact by id
  const toggleVisibility = (id) => {
    setVisibleContacts((prevState) => ({
      ...prevState,
      [id]: !prevState[id] 
    }));
  };

  const hideContactNum = (num) => {
    return num.replace(/\d/g, "*");
  };

  

  const columns = [
    { key: "id", title: "ID", render: (text, record) => (
      <div className="orders-id">
        <p className="orders-p">{record.id?.substring(0, 4)}</p>
      </div>
    ) },
    { key: "customerid", title: "Customer ID", render: (text, record) => (
      <div className="orders-customerid">
        <p className="orders-p2">{record.customerID?.substring(0, 4)}</p>
      </div>
    ) },
    { key: "time", title: "Time" },
    { key: "deliveryAddress", title: "Delivery Address", render: (text) => (
      <div className="orders-adress">
        <p className="ordersAdress-p">{text}</p>
      </div>
    ) },
    { key: "totalPrice", title: "Amount" },
    { key: "paymentMethod", title: "Payment Method" },
    { key: "contactNumber", title: "Contact",
      render: (text, record) => (
        <div className="orders-contact">
          <p className="ordersContact-p">
            {visibleContacts[record.id] ? record.contactNumber : hideContactNum(record.contactNumber)}
          </p>
        </div>
      )
    },
    {
      key: "actions",
      title: "",
      render: (text, record) => (
        <div className="orders-buttons">
          <button className="eyeButton" onClick={() => toggleVisibility(record.id)}>
            {visibleContacts[record.id] ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
          <button className="delete-Button" onClick={() => { handleShowDeleteModal(record.id) }}>
            <img src={icon} alt="Delete" />
          </button>
        </div>
      ),
    },
  ];

  const handleShowDeleteModal = (id) => {
    setShowDeleteModal(id);
  };

  const handleCancel = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="orders">
      <Table columns={columns} data={ordersData} className="ordersList" />
      {showDeleteModal && (
        <DeleteModal onCancel={handleCancel} />
      )}
    </div>
  );
}

export default Orders;
