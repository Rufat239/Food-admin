import React from 'react'
import Style from '../../Style/subnavrestaurants.css'

function SubNavBarRestaurants() {
    return (
        <div>
            <div className='sub-nav'>
                <div className='sub-nav-left'>
                    <h2>Restaurants</h2>
                </div>
                <div className='sub-nav-right'>
                    <form action="">
                        <select name="restaurants-category" className='form' id="restaurants-category">
                            <option value="category">Category type</option>
                            <option value="Fast-Food">Fast Food</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Doner">Doner</option>
                            <option value="Kebab">Kebab</option>
                            <option value="Roll">Roll</option>
                            <option value="Soup">Soup</option>
                            <option value="Sea-Food">Sea Food</option>
                            <option value="Chinese">Chinese</option>
                        </select>
                    </form>
                    <button className='res-btn'>+ ADD RESTAURANTS</button>
                </div>
            </div>
        </div>
    )
}

export default SubNavBarRestaurants