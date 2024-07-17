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
    },
    schema: {
      image: { type: "text", label: "Image" },
      name: { type: "text", label: "Name" },
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
              title="Add Category"
              subtitle="Add your category information"
              onClose={closeSideBar}
            />
          </SideBar>
  </div>
 </div>
  
  )
}

export default SubNavCategory