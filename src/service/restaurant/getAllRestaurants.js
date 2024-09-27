import axios from 'axios'
async function getRestaurants(){
    const response = await axios.get(`https://test-foody-admin-default-rtdb.firebaseio.com/restaurants.json`)
    return await response.data
}
export default getRestaurants