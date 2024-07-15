import React, { useEffect, useState } from "react";
import "../../Style/form.css";

function Form({ object, title, subtitle, onClose, dropdown }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(object);
  }, [object]);

  const handleSubmit = (e) => {
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <div className="sideBar">
          <div className="descriptionSideBar">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className="formSideBar">
            <form>
              {Object.keys(formData).map((key) => (
                <div key={key}>
                  <label htmlFor="">{key}</label>
                  <br />

                  <input
                    type="text"
                    name={key}
                    value={formData[key] || ""}
                    onChange={handleChange}
                  />
                </div>
              ))}
              <label htmlFor="">Restaurants</label>
              <br />
              <select name="" id="">
                {dropdown.map((item) => (
                  <option value={item.value}>{item.content}</option>
                ))}
              </select>
              <br />
            </form>
          </div>
        </div>
        <hr />
        <div className="btnsSideBar">
          <button type="button" onClick={onClose} className="btnCancel">
            Cancel
          </button>
          <button type="button" onClick={handleSubmit} className="btnSubmit">
            Create Product
          </button>
        </div>
      </div>
    </>
  );
}

export default Form;
