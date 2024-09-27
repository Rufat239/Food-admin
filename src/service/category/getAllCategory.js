import axios from "axios";

async function getCategory() {
    const response= await axios.get(`https://test-foody-admin-default-rtdb.firebaseio.com/categories.json`)
    return response.data;
}

export default getCategory;