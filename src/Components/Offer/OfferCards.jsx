import React, { useEffect, useState } from "react";
import "../../Style/offerCards.css";
import Table from "../Reusable/Table.jsx";
import Delete from "../../assets/SVG/delete.svg";
import Edit from "../../assets/SVG/edit.svg";
import pizza from "../../NavbarImages/Background.png";
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import getOffers from "../../service/offers/getAllOffer.js";
import axios from "axios";
import Loading from "../Loading/Loading.jsx";
import Form from '../form/Form'
import SideBar from '../sideBar/SideBar';
import updatedOffer from "../../service/offers/updateOffer.js";
import deletedOffer from "../../service/offers/deleteOffer.js";


function OfferCards() {
  // responsive dizayn ucun inline 
  const isSmallScreen = window.innerWidth <= "431px";

  // For delete ID
  const [deleteID, setDeleteID] =useState("")
// For getting ID
  const[offerID, setOfferID] = useState("")

                        // This codes using for Modal
  const [showSideBar, setShowSideBar] = useState(false);
  const [formData, setFormData] =useState({
      title: "",
      description: "",
  })

  const objectWithSchema = {
    data: formData,
    schema: {
      // image: { type: "file", label: "Image" },
      title: { type: "text", label: "Title" },
      description: { type: "textarea", label: "Description" },
     
   
    },
  };

  const openSideBar = () => {
    setShowSideBar(true);
    document.body.style.overflow = "hidden";
  };
  const closeSideBar = () => {
    setShowSideBar(false);
    document.body.style.overflow = "auto";
  };

                          // This codes using for getting data

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);



  // For fetching data
async function getOffers() {
  try {
    const response = await axios.get(
      `https://test-foody-admin-default-rtdb.firebaseio.com/offers.json`
    );

    // If response.data is empty or null control it
    if (response.data) {
      // If data have Object.entries works
      setData(Object.entries(response.data).map(([id, offer]) => ({
        id: id,
        ...offer,
      })));
    } else {
      // If data empty,update setData with empty array  
      setData([]);
      console.log("No offers available");
    }
    
    
    
  } catch (error) {
    console.error("Error fetching offers:", error);
    setData([]); 
  } finally {
    setLoading(true); 
  }
}

useEffect(() => {
  getOffers();
}, []);


// for deleting product with id

 async function deleteOffer(){
   setShowDeleteModal(false)
 
  await deletedOffer(deleteID)
  window.location.reload()

}

  const handleShowDeleteModal = (id) => {
    setDeleteID(id)
     setShowDeleteModal(true)
 };

  const columns = [
    {
      key: "id",
      title: "ID",
      render: (text,record) => (
        <div className="idContainer">
          <p className="id">{record.id?.substring(0,4).replace(/-/g, "")}</p>
        </div>
      ),
    },
    {
      key: "url",
      title: "Image",
      render: (text) => <img className="productImageOffer" src={text} alt="" />,
    },
    {
      key: "title",
      title: "Title",
      render: (text) => <div className="question">{text}</div>,
    },
    {
      key: "description",
      title: "Description",
      render: (text) => <div className="feedback">{text}</div>,
    },
    {
      key: "actions",
      title: "",
      render: (text, record) => (
        <div className="actions">
          <button className="editOffer"  onClick={()=>{

       openSideBar()
       setOfferID(record.id);
       
          }}>
            <img src={Edit} alt="Edit" className="editImg1" />
          </button>
          <button
            className="deleteOffer"
            onClick={() => handleShowDeleteModal(record.id)}
          >
            <img src={Delete} alt="Delete" className="deleteImg1" />
          </button>
        </div>
      ),
    },
  ];

  // console.log(data);

  return (
    <div className="offerContainer1">
      {loading ? (
        <>
        {data.length >0 ? (
             <Table columns={columns} data={data} className="offerTable" />
        ):(
          <p style={{ position: "absolute", color: "#C035A2", 
            fontSize: isSmallScreen ? "17px" : "20px", fontFamily: "Roboto", left: isSmallScreen ? "35%" :"55%", top: "350px"}}>
            No offers available</p>
        )}
         
          <SideBar Show={showSideBar} onClose={closeSideBar}>
            <Form
              objectWithSchema={objectWithSchema}
              title="Edit Offer"
              upload="your offer"
              subtitle="Edit your Offer information"
              page="Update Offer"
              onClose={closeSideBar}
              isEdit = {true}
              offerId = {offerID}
              formType="updatedOffer"
            />
          </SideBar>
          {showDeleteModal && <DeleteModal onCancel={() => setShowDeleteModal(false)} deleted={deleteOffer}/>}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
export default OfferCards;
