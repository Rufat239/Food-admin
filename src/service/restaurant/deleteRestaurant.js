import axios from 'axios'

async function deletedRestaurant(id){
   try {
    await axios.delete(`https://test-foody-admin-default-rtdb.firebaseio.com/restaurants/${id}.json`);

    return true
    
   } catch (error) {
    return false
   }
}

export default deletedRestaurant
