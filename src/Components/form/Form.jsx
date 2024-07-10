import React, { useEffect, useState } from "react";

function Form({ object }) {
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
      <form>
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label htmlFor="">{key}</label>

            <input
              type="text"
              name={key}
              value={formData[key] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
