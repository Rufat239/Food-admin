import React from 'react';
import Editsvg from '../../assets/SVG/edit.svg';
import Deletesvg from '../../assets/SVG/delete.svg';
import Style from '../../Style/cardrestaurants.css';

function StaticCardRestaurant() {
    const staticCard = {
        id: 1,
        image: 'path/to/image.jpg', // Replace with your image path
        name: 'Restaurant Name',
        type: 'Cuisine Type'
    };

    return (
        <div>
            <div className="card">
                <div className='cards' key={staticCard.id}>
                    <div className='cards-image'>
                        <img src={staticCard.image} alt={staticCard.name} />
                    </div>
                    <div className='cards-info'>
                        <h5>{staticCard.name}</h5>
                        <p>{staticCard.type}</p>
                    </div>
                    <div className='cards-edit'>
                        <img src={Editsvg} alt="Edit" />
                        <img src={Deletesvg} alt="Delete" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaticCardRestaurant;
