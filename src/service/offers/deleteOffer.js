// https://{projectID}-default-rtdb.firebaseio.com/{listName}.json
import axios from 'axios'

async function deletedOffer(id){
   try {
    await axios.delete(`https://test-foody-admin-default-rtdb.firebaseio.com/offers/${id}.json`);

    return true
    
   } catch (error) {
    return false
   }
}

export default deletedOffer
