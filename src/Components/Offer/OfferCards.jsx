import React from 'react'
import "../../Style/offerCards.css"
// import Edit from "../../assets/offerImages/Edit.png"
// import Delete from "../../assets/offerImages/Delete.png"
// import pizza from "../../assets/offerImages/pizza.png"

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

  function handleDelete(id){
    console.log(id);
  }

  return (
    <div className='offerContainer1'>

         <div className="offerList">
        <table>
          <thead>
            <tr>
              <th className="idColumn">ID</th>
              <th className="imageColumn">Image</th>
              <th className="titleColumn">Title</th>
              <th className="descriptionColumn">Description</th>
              <th className="actionsColumn"></th>
            </tr>
          </thead>
          <tbody>

            {offers.map((offer)=> (
              <tr key={offer.id}>
              <td>
                <div className="idContainer">
                  <p className="id">{offer.id}</p>
                </div>
              </td>
              <td>
                <img src={offer.image} />
              </td>
              <td className="question">
               {offer.title}
              </td>
              <td className="feedback">{offer.description}</td>
              <td className="actions">
                <button className="edit">
                  <img src="" />
                </button>

                <button className="delete" onClick={()=>handleDelete(offer.id)}>
                  <img src="" />
                </button>
              </td>
            </tr>
            ))}
            

          
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OfferCards