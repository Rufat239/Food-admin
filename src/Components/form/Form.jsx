import React, { useEffect, useState } from "react";
import "../../Style/form.css";
import cloudImage from "../../assets/cloudImage/cloudImage.png";
import postOffer from "../../service/offers/createOffer";
import updatedOffer from "../../service/offers/updateOffer";
import postRestaurant from "../../service/restaurant/createRestaurant";
import updatedRestaurant from "../../service/restaurant/updateRestaurant";
import postCategory from "../../service/category/createCategory";
import updatedCategory from "../../service/category/updateCategory";
import  addProductToFirebase  from "../../service/product/addProduct";
import axios from "axios";

function Form({
  title,
  upload,
  subtitle,
  onClose,
  objectWithSchema,
  page,
  formType,
  isEdit = false,
  offerId = null,
  restaurantId = null,
  categoryId = null,
}) {

  const { data, schema } = objectWithSchema;
  const [formData, setFormData] = useState(data || {});
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    // OFFER
    if (formType === "postOffer") {
      setFormData({
        title: "",
        description: "",
        url: "",
      });
      setPreviewImage(""); 
    } else if (isEdit && offerId && formType === "updatedOffer") {
        const fetchOfferData = async () => {
        try {
          const response = await axios.get(
            `https://test-foody-admin-default-rtdb.firebaseio.com/offers/${offerId}.json`
          );
          if (response.data) {
            setFormData({
              title: response.data.title || "",
              description: response.data.description || "",
              url: response.data.url || "",
            });
            setPreviewImage(response.data.url || ""); 
          }
        } catch (error) {
          console.error("Error occurs when fecth offer:", error);
        }
      };
      fetchOfferData();
    }

    // CATEGORY
    else if (formType === "postCategory") {
      setFormData({
        name: "",
        slug: "",
        url: "",
      });
      setPreviewImage(""); 
    } else if (isEdit && categoryId && formType === "updatedCategory") {
      // datalari fetch et
      const fetchCategoryData = async () => {
        try {
          const response = await axios.get(
            `https://test-foody-admin-default-rtdb.firebaseio.com/categories/${categoryId}.json`
          );
          if (response.data) {
            setFormData({
              name: response.data.name || "",
              slug: response.data.slug || "",
              url: response.data.url || "",
            });
            setPreviewImage(response.data.url || ""); 
          }
        } catch (error) {
          console.error("TError occurs when fecth category:", error);
        }
      };
      fetchCategoryData();
    }
  
    // RESTAURANT
    else if (formType === "postRestaurant") {
      setFormData({
        name: "",
        cuisine: "",
        deliveryPrice: "",
        deliveryMin: "",
        address: "",
        category: "",
        url: "",
      });
      setPreviewImage(""); 
    } else if (isEdit && restaurantId && formType === "updateRestaurant") {
        const fetchRestaurantData = async () => {
        try {
          const response = await axios.get(
            `https://test-foody-admin-default-rtdb.firebaseio.com/restaurants/${restaurantId}.json`
          );
          if (response.data) {
            setFormData({
              name: response.data.name || "",
              cuisine: response.data.cuisine || "",
              deliveryPrice: response.data.deliveryPrice || "",
              deliveryMin: response.data.deliveryMin || "",
              address: response.data.address || "",
              category: response.data.category || "",
              url: response.data.url || "",
            });
            setPreviewImage(response.data.url || ""); 
          }
        } catch (error) {
          console.error("Error occurs when fecth restaurant:", error);
        }
      };
      fetchRestaurantData();
    }
  }, [isEdit, offerId, restaurantId, categoryId, formType]);


  
  const handleSubmit = async (e) => {
    e.preventDefault(); //bunu elave etdim
    try {
      // Offer
      if (formType === "postOffer") {
        await postOffer(formData);
      } else if (isEdit && formType === "updatedOffer") {
        await updatedOffer(offerId, formData);
      }
      // Restaurant
      else if (formType === "postRestaurant") {
        await postRestaurant(formData);
      } else if (isEdit && formType === "updateRestaurant") {
        await updatedRestaurant(restaurantId, formData);
      }
      // Category
      else if (formType === "postCategory") {
        await postCategory(formData);
      } else if (isEdit && formType === "updatedCategory") {
        await updatedCategory(categoryId, formData);
      }
      // Product
      else if (formType === "addProductToFirebase") {
        await addProductToFirebase(formData);
      }
      onClose(); // ve bunu elave etdim
      window.location.reload();
    } catch (error) {
      console.log("Error updating:", error);
    }
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setFormData({
        ...formData,
        imagePreview: fileReader.result, 
        image: file,
      });
      setPreviewImage(fileReader.result); 
    };
    if (file) {
      fileReader.readAsDataURL(file); 
    }
  };

  // this function works when click input
  const triggerFileInput = () => {
    document.getElementById("file-upload").click();
  };

  const renderInput = (key, fieldType, options) => {
    switch (fieldType) {
      case "text":
      case "number":
        return (
          <input
            type={fieldType}
            name={key}
            value={formData[key] || ""}
            onChange={handleChange}
          />
        );

      case "file":
        return (
          <div className="uploadSection">
            {/* Cloud image ve upload yazisi */}
            <div className="uploadWrapper" onClick={triggerFileInput}>
              <img src={cloudImage} alt="Upload" className="cloudImage" />
            </div>

            <div className="uploadLabelText">upload</div>

            <div className="uploadButtonWrapper">
              <input
                id="file-upload"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
        );

      case "textarea":
        return (
          <textarea
            name={key}
            value={formData[key] || ""}
            onChange={handleChange}
          />
        );

      case "select":
        return (
          <select name={key} value={formData[key]} onChange={handleChange}>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.content}
              </option>
            ))}
          </select>
        );

      default:
        return (
          <input
            type="text"
            name={key}
            value={formData[key] || ""}
            onChange={handleChange}
          />
        );
    }
  };

  return (
    <>
      <div>
        <div className="sideBar">
          <div>
            <div className="descriptionSideBar">
              <h2 className="modalTitle">{title}</h2>

              {/* "Upload image" text display here*/}
              <section
                className="imageUploadSection"
                style={{
                  display: "flex",
                  marginTop: "-10px",
                  marginBottom: "40px",
                }}
              >
                {/* <div className="uploadLabel">Upload {upload} image</div> */}

                <div className="imageUploadSectionFigure">
                  <div className="uploadLabel">Upload {upload} image</div>
                  {/* Image preview */}
                  {previewImage && (
                    <figure className="uploadLabelImage">
                      <img src={previewImage} alt="Preview" />
                    </figure>
                  )}
                </div>

                <section className="imageInputSection">
                  {/* Image inputu  */}
                  <div className="imageInputDiv">
                    {renderInput("image", "file")}
                  </div>
                </section>
              </section>
            </div>

            <section className="formSideBarSection" style={{ display: "flex" }}>
              <p className="modalSubtitle">{subtitle}</p>
              <div className="formSideBar">
                <form>
                  {/* Render other form inputs */}
                  {Object.keys(schema).map((key) =>
                    key !== "image" ? (
                      <div key={key}>
                        <label htmlFor={key}>{schema[key].label}</label>
                        <br />
                        {renderInput(
                          key,
                          schema[key].type,
                          schema[key].options
                        )}
                      </div>
                    ) : null
                  )}
                </form>
              </div>
            </section>
          </div>

          <section className="reusableModalBottom">
            <hr />
            <div className="btnsSideBar">
              <button type="button" onClick={onClose} className="btnCancel">
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="btnSubmit"
              >
                {page}
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Form;
