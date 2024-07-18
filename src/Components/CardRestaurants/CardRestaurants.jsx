import React from 'react';
import Editsvg from '../../assets/SVG/edit.svg';
import Deletesvg from '../../assets/SVG/delete.svg';
import Style from '../../Style/cardrestaurants.css';

function CardRestaurants({ restaurants }) {

    

    return (
        <div>
            <div className="card">
                {restaurants.map(card => (
                    <div className='cards' key={card.id}>
                        <div className='cards-image'>
                            <img src={card.image} alt={card.name} />
                        </div>
                        <div className='cards-info'>
                            <h5>{card.name}</h5>
                            <p>{card.type}</p>
                        </div>
                        <div className='cards-edit'>
                            <img src={Editsvg} alt="Edit" />
                            <img src={Deletesvg} alt="Delete" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardRestaurants;
