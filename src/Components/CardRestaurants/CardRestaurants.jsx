import React, { useState } from 'react';
import Editsvg from '../SVG/edit.svg';
import Deletesvg from '../SVG/delete.svg';
import Style from '../../Style/cardrestaurants.css';

function CardRestaurants() {
    const initialCards = [
        { id: 1, name: "Papa John’s", type: "Pizza", image: "https://logowik.com/content/uploads/images/pizza-papa-johns2504.logowik.com.webp" },
        { id: 2, name: "Papa John’s", type: "Pizza", image: "https://logowik.com/content/uploads/images/pizza-papa-johns2504.logowik.com.webp" },
        { id: 3, name: "Papa John’s", type: "Pizza", image: "https://logowik.com/content/uploads/images/pizza-papa-johns2504.logowik.com.webp" },
        { id: 4, name: "Papa John’s", type: "Pizza", image: "https://logowik.com/content/uploads/images/pizza-papa-johns2504.logowik.com.webp" },
        { id: 5, name: "Papa John’s", type: "Pizza", image: "https://logowik.com/content/uploads/images/pizza-papa-johns2504.logowik.com.webp" },
        { id: 6, name: "Papa John’s", type: "Pizza", image: "https://logowik.com/content/uploads/images/pizza-papa-johns2504.logowik.com.webp" }
    ];

    const [cards, setCards] = useState(initialCards);

    const handleDelete = (id) => {
        setCards(cards.filter(card => card.id !== id));
    };

    return (
        <div>
            <div className="card">
                {cards.map(card => (
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
                            <img src={Deletesvg} alt="Delete" onClick={() => handleDelete(card.id)} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardRestaurants;
