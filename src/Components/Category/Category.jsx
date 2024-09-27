import React, { useEffect, useState } from "react";
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
import Loading from "../Loading/Loading.jsx";
import deletedCategory from "../../service/category/deletecategory.js";
import updatedCategory from "../../service/category/updateCategory.js"
import getCategory from "../../service/category/getAllCategory.js";
import axios from "axios";


function Category() {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteID, setDeleteID]=useState("")
  const [categoryID, setCategoryID]=useState("")

  const handleShowDeleteModal = (id) => {
    setDeleteID(id)
    setShowDeleteModal(true)
  }

    // for deleting product with id

 async function deleteCategory()  {
    setShowDeleteModal(false)
    await deletedCategory(deleteID)
    window.location.reload()

  }

  // This codes using for Modal
  const [showSideBar, setShowSideBar] = useState(false);

  const objectWithSchema = {
    data: {
      // image: "",
      name: "",
      // description: "",
      slug:"",
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

 
// This codes using for Data

const [data, setData]=useState([]);
const [loading, setLoading]=useState(false)

async function getCategory() {
  const response =await axios.get(
    `https://test-foody-admin-default-rtdb.firebaseio.com/categories.json`
  );
 if (response.data) {
  setData(Object.entries(response.data).map(([id,category])=>(
    {
      id:id,
      ...category,
    })));
 }
 else{
  setData([])
  console.log("No category available");
 }
 
  
    setLoading(true)
}
// console.log(data);

useEffect(()=>{
  getCategory();
},[]);


  const columns = [
    { key: "id", title: "ID", render:(text)=>(
      <div className="td-number">
          <p className="list">{text}</p>
          </div>
    )},
    { key: "url", title: "Image", render: (text) => <img className="productImageCategory" src={text}  alt="" /> },
    { key: "name", title: "Name" },
    { key: "slug", title: "Slug" },
    {
      key: "actions",
      title: "",
      render: (text, record) => (
        <div className="cat-buttons">
         <button className="editButton" onClick={() => {
          
          openSideBar()
          setCategoryID(record.id);
          
         }}>
            <img src={editIcon} alt="Edit" />
          </button>
          <button className="deleteButton" onClick={() => handleShowDeleteModal(record.id) }>
            <img src={deleteIcon} alt="Delete" />
          </button>
        </div>
      ),
    },
  ];
 
  return (
    <div className="container-tab">
    {loading?(
    <>
    {data.length>0 ?(
       <Table columns={columns} data={data} className="table" />
    ):(
      <p className="nocategory">
        No categories available
      </p>
    )}
        <SideBar Show={showSideBar} onClose={closeSideBar}>
        <Form
          objectWithSchema={objectWithSchema}
          title="Edit Category"
          upload="your category"
          subtitle="Edit your Category information"
          page= "Update Category"
          onClose={closeSideBar}
          isEdit={true}
          categoryId={categoryID}
          formType="updatedCategory"
        />
      </SideBar>
      {showDeleteModal && <DeleteModal onCancel={() => setShowDeleteModal(false)} deleted={deleteCategory}/>}
    </>
    ):(
    <Loading/>)}
    </div>
  );
}
export default Category;