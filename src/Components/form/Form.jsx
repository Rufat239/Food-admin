import React, { useEffect, useState } from "react";
import "../../Style/form.css";
function Form({ title, subtitle, onClose, objectWithSchema }) {
  const { data, schema } = objectWithSchema;
  const [formData, setFormData] = useState(data);
  console.log(objectWithSchema);
  useEffect(() => {
    setFormData(data);
  }, [data]);
  const handleSubmit = (e) => {
    console.log(formData);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
          <div className="descriptionSideBar">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className="formSideBar">
            <form>
              {Object.keys(schema).map((key) => (
                <div key={key}>
                  <label htmlFor="">{schema[key].label}</label>
                  <br />
                  {renderInput(key, schema[key].type, schema[key].options)}
                </div>
              ))}
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
