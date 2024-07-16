import React, { useState } from 'react'
import "../../Style/subNavOffer.css"
import Form from '../form/Form'
import SideBar from '../sideBar/SideBar';


function SubNavOffer() {

  const [showSideBar, setShowSideBar] = useState(false);

  const objectWithSchema = {
    data: {
      image: "",
      title: "",
      description: "",
     
    },
    schema: {
      image: { type: "text", label: "Image" },
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

  return (
    
         <div className="offerContainer">
          
      <div className="offerHeader">
        <h2>Offers</h2>
        <button className="addOfferButton" onClick={openSideBar} >
          +
          <span>ADD OFFER</span>
        </button>
        <SideBar Show={showSideBar} onClose={closeSideBar}>
            <Form
              objectWithSchema={objectWithSchema}
              title="Add Offer"
              subtitle="Add your Offer information"
              onClose={closeSideBar}
            />
          </SideBar>
      </div>
      </div>
   
  )
}

export default SubNavOffer