// https://{projectID}-default-rtdb.firebaseio.com/{listName}.json
import axios from 'axios'

async function getOffers(){
    const response = await axios.get(`https://test-foody-admin-default-rtdb.firebaseio.com/offers.json`)

    return await response.data
}

export default getOffers