import React, { useState } from 'react'
import '../../Style/subNavCategory.css'
import SideBar from "../sideBar/SideBar"
import Form from "../form/Form";

function SubNavCategory() {

  const [showSideBar, setShowSideBar] = useState(false);

  const objectWithSchema = {
    data: {
      image: "",
      name: "",
      description: "",
      price: "",
      restaurants: "",
    },
    schema: {
      image: { type: "text", label: "Image" },
      name: { type: "text", label: "Name" },
      description: { type: "textarea", label: "Description" },
      price: { type: "number", label: "Price" },
      restaurants: {
        type: "select",
        label: "Restaurants",
        options: [
          { value: "fastFood", content: "Papa John's" },
          { value: "italian", content: "Italian" },
        ],
      },
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
    <div className='cat-nav'>
  <div className='cat-heading'>
    <h1>Category</h1>
  </div>
  <div className='click'>
    <button className='category' onClick={openSideBar}>+ADD CATEGORY</button>
    <SideBar Show={showSideBar} onClose={closeSideBar}>
            <Form
              objectWithSchema={objectWithSchema}
              title="Add Product"
              subtitle="Add your Product description and necessary information"
              onClose={closeSideBar}
            />
          </SideBar>
  </div>
 </div>
  
  )
}

export default SubNavCategory