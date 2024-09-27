import axios from "axios";
async function postRestaurant(values = { name: "", cuisine: "", deliveryPrice: "", deliveryMin: "", address: "", category: "", image: "" }) {
    const storageFolderName = "restaurants";
    const pictureName = values.image.name.split(".")[0];
    const projectID = "test-foody-admin";
    const dbCollectionName = "restaurants";
    
    const { data } = await axios.post(
        `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png`,
        values.image,
        {
            headers: {
                "Content-Type": values.image.type,
            },
        }
    );
    const restaurant = {
        name: values.name,
        cuisine: values.cuisine,
        deliveryPrice: values.deliveryPrice,
        deliveryMin: values.deliveryMin,
        address: values.address,
        category: values.category,
        url: `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png?alt=media&token=${data.downloadTokens}`,
    };
    await axios.post(
        `https://${projectID}-default-rtdb.firebaseio.com/${dbCollectionName}.json`,
        restaurant
    );
}
export default postRestaurant;