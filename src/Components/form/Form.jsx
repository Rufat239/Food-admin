import React, { useEffect, useState } from "react";
import "../../Style/form.css";
import cloudImage from "../../assets/cloudImage/cloudImage.png";
import postOffer from "../../service/offers/createOffer";
import updatedOffer from "../../service/offers/updateOffer"
import postRestaurant from "../../service/restaurant/createRestaurant";

function Form({ title, upload,  subtitle, onClose, objectWithSchema ,page, formType , isEdit= false, offerId=null}) {
  const { data, schema } = objectWithSchema;
  const [formData, setFormData] = useState(data);
  const [selectedFile, setSelectedFile] = useState(null);

  // const [scrollClass, setScrollClass] = useState("noScroll");

  useEffect(() => {
    setFormData(data);
    // const inputCount = Object.keys(schema).length;
    // if (inputCount > 3) {
    //   setScrollClass("scroll");
    // } else {
    //   setScrollClass("noScroll");
    // }
  }, [data]);  
  // console.log(isEdit, formType);
  

  const handleSubmit = async (e) => {
    e.preventDefault() //bunu elave etdim

    // if (!selectedFile) {
    //   console.log("No image selected");
    //   return;
    // }
    
    try {
      if(formType === "postOffer"){
        await postOffer(formData);
        // console.log("indi yoxla" );
        
      }else if(formType === "postRestaurant"){
        await postRestaurant(formData)
      }
      else if(isEdit && formType=== "updatedOffer"){
        console.log("isledi");
        
        await updatedOffer(offerId , formData )
      }
      onClose() // ve bunu elave etdim 
      window.location.reload();
    } catch (error) {
      console.log("Error posting offer:", error);
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
    setFormData({
      ...formData,
      image: file,
    });
    console.log(file);
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
              <section className="imageUploadSection"
                style={{
                  display: "flex",
                  marginTop: "-10px",
                  marginBottom: "40px",
                }}
              >
                <div className="uploadLabel">Upload {upload} image</div>

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
