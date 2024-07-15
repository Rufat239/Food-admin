import React from "react";
import "../../Style/offerCards.css";
import Table from "../Reusable/Table.jsx";
// import Edit from '../../assets/offerImages/Edit.png';
// import Delete from '../../assets/offerImages/Delete.png';
// import pizza from '../../assets/offerImages/pizza.png';
function OfferCards() {
  const offers = [
    {
      id: 9177,
      image: "",
      title: "Do you like Pizza at Papa John's?",
      description: "Yummy this pizza but...",
    },
    {
      id: 9178,
      image: "",
      title: "Do you like Pizza at Papa John's?",
      description: "Yummy this pizza but...",
    },
    {
      id: 9179,
      image: "",
      title: "Do you like Pizza at Papa John's?",
      description: "Yummy this pizza but...",
    },
  ];
  function handleDelete(id) {
    console.log(id);
  }
  const columns = [
    {
      key: "id",
      title: "ID",
      render: (text) => (
        <div className="idContainer">
          <p className="id">{text}</p>
        </div>
      ),
    },
    {
      key: "image",
      title: "Image",
      render: (text) => <img src={text} alt="" />,
    },
    {
      key: "title",
      title: "Title",
      render: (text) => <div className="question">{text}</div>,
    },
    {
      key: "description",
      title: "Description",
      render: (text) => <div className="feedback">{text}</div>,
    },
    {
      key: "actions",
      title: "",
      render: (text, record) => (
        <div className="actions">
          <button className="edit">
            <img src="" alt="Edit" />
          </button>
          <button className="delete" onClick={() => handleDelete(record.id)}>
            <img src="" alt="Delete" />
          </button>
        </div>
      ),
    },
  ];
  return (
    <div className="offerContainer1">
      <div className="offerList">
        <Table columns={columns} data={offers} className="offerTable" />
      </div>
    </div>
  );
}
export default OfferCards;