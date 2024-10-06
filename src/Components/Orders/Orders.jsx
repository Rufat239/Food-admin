import React, { useEffect, useState } from "react";
import '../../Style/orders.css';
import Table from "../Reusable/Table.jsx";
import icon from '../../assets/SVG/delete.svg';
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import axios from "axios";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Loading from "../Loading/Loading.jsx";

function Orders() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [visibleContacts, setVisibleContacts] = useState({});
   // responsive dizayn ucun inline 
   const isSmallScreen = window.innerWidth <= "431px";
  
  // Fetch data from Client
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const getOrderDatas = async () => {
      const orderUrl = `https://test-foody-admin-default-rtdb.firebaseio.com/orders.json`;
      try {
        const response = await axios.get(orderUrl);
        const data = response.data;

        if (data) {
          setOrderData(Object.values(data));
        } else {
          setOrderData([]);
          console.log("No orders available");
        }
      } catch (error) {
        console.log("Error fetching orders:", error);
        setOrderData([]);
      } finally {
        setLoading(false); 
      }
    };
    getOrderDatas();
  }, []);

  // Toggle visibility for a specific contact by id
  const toggleVisibility = (id) => {
    setVisibleContacts((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  // Hide digits in contact number
  const hideContactNum = (num) => {
    return num.replace(/[\d+]/g, "*");
  };

  // Function to delete the specific order by ID
  const deleteOrder = async () => {
    if (deleteId) {
      try {
        await axios.delete(`https://test-foody-admin-default-rtdb.firebaseio.com/orders/${deleteId}.json`);
        console.log("Deleted order with ID:", deleteId);
        
        const updatedOrders = orderData.filter((order) => order.id !== deleteId);
        setOrderData(updatedOrders);
        setShowDeleteModal(false); 
      } catch (error) {
        console.error("Error deleting order:", error);
      }
    }
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
          <button
            className="delete-Button"
            onClick={() => handleShowDeleteModal(record.id)}
          >
            <img src={icon} alt="Delete" />
          </button>
        </div>
      ),
    },
  ];

  const handleShowDeleteModal = (id) => {
    console.log("Show delete modal for ID:", id); 
    setDeleteId(id); 
    setShowDeleteModal(true); 
  };

  const handleCancel = () => {
    console.log("Cancel delete modal"); 
    setShowDeleteModal(false);
    setDeleteId(null); 
  };

  return (
    <div className="orders">
      {loading ? ( 
        <Loading />
      ) : (
        <>
          {orderData.length > 0 ? ( 
            <Table columns={columns} data={orderData} className="ordersList" />
          ) : ( 
            <p className="no-orders-message" style={{ position: "absolute",
               color: "#C035A2", 
              fontSize: isSmallScreen ? "17px" : "20px",
               fontFamily: "Roboto", left: isSmallScreen ? "35%" :"55%", top: "350px"}}>No orders available</p>
          )}
          {showDeleteModal && (
            <DeleteModal
              onCancel={handleCancel}
              deleted={deleteOrder}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Orders;
