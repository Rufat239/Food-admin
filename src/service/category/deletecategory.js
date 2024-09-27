import axios from "axios";

async function deletedCategory(id){
    try{
        await axios.delete(`https://test-foody-admin-default-rtdb.firebaseio.com/categories/${id}.json`)

        return true
    } catch(error){
        return false
    }
} 
 
export default deletedCategory