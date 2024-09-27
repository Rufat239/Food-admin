import React, { useState } from 'react'
import "../../Style/subNavOffer.css"
import Form from '../form/Form'
import SideBar from '../sideBar/SideBar';


function SubNavOffer() {

  const [showSideBar, setShowSideBar] = useState(false);

  const objectWithSchema = {
    data: {
      // image: "",
      title: "",
      description: "",
     
    },
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

  return (
    
    
         <div className="offerContainer">
          <SideBar Show={showSideBar} onClose={closeSideBar}>
            <Form
              objectWithSchema={objectWithSchema}
              title="Add Offer"
              upload = "your offer"
              subtitle="Add your Offer information"
              page ="Create Offer"
              onClose={closeSideBar}
              formType={"postOffer"}
            />
          </SideBar>
          
      <div className="offerHeader">
        <h2 className='offerHeaderH2'>Offers</h2>
        <button className="addOfferButton" onClick={openSideBar} >
          +
          <span>ADD OFFER</span>
        </button>
        
      </div>
      </div>
   
  )
}

export default SubNavOffer