import axios from "axios";

async function updatedRestaurant(id, values = { name: "", cuisine: "", deliveryPrice: "", deliveryMin: "", address: "", category: "", image: "" }) {
  const storageFolderName = "restaurants";
  const projectID = "test-foody-admin";
  const dbCollectionName = "restaurants";

  let imageUrl = values.url; 

  
  if (values.image && typeof values.image !== "string") {
    const pictureName = values.image.name.split(".")[0];

    const { data } = await axios.post(
      `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png`,
      values.image,
      {
        headers: {
          "Content-Type": values.image.type,
        },
      }
    );

    imageUrl = `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png?alt=media&token=${data.downloadTokens}`;
  }

  
  const restaurant = {
    name: values.name,
    cuisine: values.cuisine,
    deliveryPrice: values.deliveryPrice,
    deliveryMin: values.deliveryMin,
    address: values.address,
    category: values.category,
    url: imageUrl,
};

  
  await axios.put(
    `https://${projectID}-default-rtdb.firebaseio.com/${dbCollectionName}/${id}.json`,
    restaurant
  );
}

export default updatedRestaurant;
