import React, { useState, useEffect } from "react";
import styles from "../../Style/product.module.css";
import { Modal, Box, Button, Typography } from "@mui/material";
import getProducts from "../../service/product/getAllProducts";
import deleteProduct from "../../service/product/deleteProduct";
import SideBar from "../sideBar/SideBar";
import Form from "../form/Form";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [productID, setProductID] = useState("")
  const [resturantTypes,setResturantTypes] = useState([])


  // GET RESTAURANT TYPE

  useEffect(() => {
    const getRestaurantType = async () => {
      const resturantUrl = `https://test-foody-admin-default-rtdb.firebaseio.com/restaurants.json`

      try {
        const response = await axios.get(resturantUrl)
        const data = response.data

        const types = [... new Set(Object.values(data).map((item) => item.name))]
        setResturantTypes(types)
        console.log(types,"typedata")
      } catch (error) {
        console.log("error")
      }
    }

    getRestaurantType()
  },[])




  // FOR EDIT

  const [formData, setFormData] = useState({
    // image: "",
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const objectWithSchema = {
    data: formData,
    schema: {
      // image: { type: "text", label: "Image" },
      name: { type: "text", label: "Name" },
      description: { type: "textarea", label: "Description" },
      price: { type: "text", label: "Price" },
      category: {
        type: "select",
        label: "Restaurant Type",
        options: resturantTypes.map((type) => ({
          value: type,
          content:type
        }))
      },
    },
  };


  console.log(products,"product")


  const [selectedProduct, setSelectedProduct] = useState(null)
  const openSideBar = (product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      restaurant: product.restaurant || "",
      image: product.url || "",
    });
    setShowSideBar(true);
    document.body.style.overflow = "hidden";
  }


  const [showSideBar, setShowSideBar] = useState(false);

  const closeSideBar = () => {
    setShowSideBar(false);
    document.body.style.overflow = "auto";
  };

  ////////////




  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts();
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, []);

  const handleOpen = (productId) => {
    setProductToDelete(productId);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    if (productToDelete) {
      const isDeleted = await deleteProduct(productToDelete);
      if (isDeleted) {
        setProducts(
          products.filter((product) => product.id !== productToDelete)
        );
        console.log(`Silindi`);
      } else {
        console.error("Silinmedi");
      }
    }
    handleClose();
  };

  return (
    <div className={styles.all}>
      <div className={styles.filterLine}>
        <p>Products</p>
        <div className={styles.filterActions}>
          <select name="" id="">
            <option value="Restaurant type">Restaurant type</option>
            {resturantTypes.map((type,index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.products}>
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <img src={product.imageUrl} alt={product.title} />
              <h2>{product.name}</h2>
              <p>{product.restaurant || "Unknown Restaurant"}</p>
              <div className={styles.productActions}>
                <p>
                  <span>{product.price}</span>$
                </p>
                <div>
                  <span className={styles.editBtn} onClick={() => {
                    openSideBar(product);
                    setProductID(product.id);
                  }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.4007 4.07233C16.3043 3.97589 16.1479 3.97589 16.0515 4.07233L13.6725 6.45133L17.5487 10.3275L19.9277 7.94855C20.0241 7.85211 20.0241 7.69574 19.9277 7.59929L16.4007 4.07233ZM16.1345 11.7418L12.2582 7.86554L4.47416 15.6496C4.43247 15.6913 4.40707 15.7465 4.40255 15.8053L4.08654 19.9135L8.19468 19.5975C8.25346 19.5929 8.30869 19.5675 8.35037 19.5258L16.1345 11.7418ZM14.6372 2.65812C15.5147 1.78063 16.9374 1.78063 17.8149 2.65812L21.3419 6.18508C22.2194 7.06257 22.2194 8.48527 21.3419 9.36277L9.76459 20.9401C9.38531 21.3193 8.88288 21.5504 8.34808 21.5916L3.0767 21.9971C2.78563 22.0194 2.49932 21.9135 2.2929 21.7071C2.08647 21.5007 1.98056 21.2144 2.00295 20.9233L2.40844 15.6519C2.44958 15.1171 2.68067 14.6147 3.05994 14.2354L14.6372 2.65812Z"
                        fill="#00B2A9"
                      />
                    </svg>
                  </span>
                  <span
                    className={styles.deleteBtn}
                    onClick={() => handleOpen(product.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_135_673)">
                        <path
                          d="M6.82261 23.1214H19.7408V7.72719H6.82261V23.1214ZM9.47084 13.0932L10.9887 11.5427L13.2817 13.8739L15.5639 11.5427L17.0818 13.0932L14.7996 15.4243L17.0818 17.7554L15.5639 19.3058L13.2817 16.9747L10.9995 19.3058L9.4816 17.7554L11.7638 15.4243L9.47084 13.0932ZM17.0495 4.42844L15.973 3.32886H10.5904L9.5139 4.42844H5.74609V6.62761H20.8173V4.42844H17.0495Z"
                          fill="#EB5757"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_135_673">
                          <rect
                            width="25.8364"
                            height="26.39"
                            fill="white"
                            transform="translate(0.363525 0.0300293)"
                          />
                        </clipPath>
                      </defs>

                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}

        <SideBar Show={showSideBar} onClose={closeSideBar}>
          <Form
            objectWithSchema={objectWithSchema}
            title="Edit Products"
            subtitle="Edit your Products information"
            onClose={closeSideBar}
            page="Update Product"
            uploadText="Upload your Product image"
            isEdit={true}
            productId={productID}
            formType="updateProduct"
          />
        </SideBar>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Are you sure it’s deleted ?
          </Typography>
          <Typography
            id="modal-description"
            sx={{ mt: 2, fontWeight: 400, color: "#4F4F4F" }}
          >
            Attention! If you delete this product, it will not come back.
          </Typography>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
            <Button onClick={handleClose} sx={{ mr: 1 }}>
              Cancel
            </Button>
            <Button onClick={handleDelete} variant="contained" color="error">
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Products;
