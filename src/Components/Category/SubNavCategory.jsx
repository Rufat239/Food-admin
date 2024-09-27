import React, { useState } from 'react'
import '../../Style/subNavCategory.css'
import SideBar from "../sideBar/SideBar"
import Form from "../form/Form";

function SubNavCategory() {

  const [showSideBar, setShowSideBar] = useState(false);

  const objectWithSchema = {
    data: {
      // image: "",
      name: "",
      // description: "",
      slug:""
    },
    schema: {
      // image: { type: "text", label: "Image" },
      name: { type: "text", label: "Name" },
      slug: {type:"text", label:"Slug"},
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
  <div className='cat-container'>
  <div className='cat-heading'>
    <h2 className='cat-headingH2'>Category</h2>
  
    <button className='category' onClick={openSideBar}>+<span>ADD CATEGORY</span></button>
    <SideBar Show={showSideBar} onClose={closeSideBar}>
            <Form
              objectWithSchema={objectWithSchema}
              title="Add Category"
              upload="your category"
              subtitle="Add your Category information"
              page="Create Category"
              onClose={closeSideBar}
              formType={"postCategory"}
            />
          </SideBar>
  </div>
  </div>

  
  )
}

export default SubNavCategory