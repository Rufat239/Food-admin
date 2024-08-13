import React, { useState } from "react";
import "../../Style/categoryCards.css";
import Table from "../Reusable/Table.jsx";
import deleteIcon from '../../assets/SVG/delete.svg'
import editIcon from '../../assets/SVG/edit.svg'
import pizza from '../../assets/SVG/pizza.svg'
import sendvic from '../../assets/SVG/sendvic.svg'
import fries from '../../assets/SVG/fries.svg'
import DeleteModal from "../DeleteModal/DeleteModal.jsx";
import SideBar from "../sideBar/SideBar"
import Form from "../form/Form";
function Category() {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showSideBar, setShowSideBar] = useState(false);
  const data = [
    { id: 9177, image: pizza, name: "Pizza", slug: "yummy-pizza" },
    { id: 9178, image: sendvic, name: "Sendvic", slug: "sendvic" },
    { id: 9177, image: fries, name: "Fries", slug: "fries" },
    { id: 9177, image: pizza, name: "Pizza", slug: "yummy-pizza" },
    { id: 9178, image: sendvic, name: "Sendvic", slug: "sendvic" },
    { id: 9177, image: fries, name: "Fries", slug: "fries" },
    { id: 9177, image: pizza, name: "Pizza", slug: "yummy-pizza" },
    { id: 9178, image:sendvic, name: "Sendvic", slug: "sendvic" },
    { id: 9177, image: fries, name: "Fries", slug: "fries" },
  ];
  const columns = [
    { key: "id", title: "ID", render:(text)=>(
      <div className="td-number">
          <p className="list">{text}</p>
          </div>
    )},
    { key: "image", title: "Image", render: (text) => <img src={text} alt="" /> },
    { key: "name", title: "Name" },
    { key: "slug", title: "Slug" },
    {
      key: "actions",
      title: "",
      render: (text, record) => (
        <div className="cat-buttons">
         <button className="editButton" onClick={() => openSideBar(record.id)}>
            <img src={editIcon} alt="Edit" />
          </button>
          <button className="deleteButton" onClick={() => handleShowDeleteModal(record.id) }>
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      ),
    },
  ];
  const objectWithSchema = {
    data: {
      image: "",
      name: "",
      description: "",
      slug:"",
    },
    schema: {
      image: { type: "text", label: "Image" },
      name: { type: "text", label: "Name" },
      slug:{type:"text", label:"Slug"},
    },
  };

  const openSideBar = (id) => {
    setShowSideBar(true);
    document.body.style.overflow = "hidden";
  };

  const closeSideBar = () => {
    setShowSideBar(false);
    document.body.style.overflow = "auto";
  };
  const handleShowDeleteModal = (id) => {
    setShowDeleteModal(id)
  }
  const handleCancel = () => {
    setShowDeleteModal(false)
  }
  return (
    <div className="container-tab">
      <Table columns={columns} data={data} className="table" />
      {showDeleteModal && (
        <DeleteModal
        onCancel={handleCancel}/>
      )}
        <SideBar Show={showSideBar} onClose={closeSideBar}>
        <Form
          objectWithSchema={objectWithSchema}
          title="Edit Category"
          subtitle="Edit your category information"
          onClose={closeSideBar}
        />
      </SideBar>
    </div>
  );
}
export default Category;