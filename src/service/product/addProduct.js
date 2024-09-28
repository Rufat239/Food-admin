import axios from "axios";

const addProductToFirebase = async (
  productData = { title: "", description: "", price: "", image: "" }
) => {
  const storageFolderName = "products";
  const pictureName = productData.image.name.split(".")[0];
  const projectID = "test-foody-admin";
  const dbCollectionName = "products";

  try {
    const { data } = await axios.post(
      `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png?uploadType=media`,
      productData.image,
      {
        headers: {
          "Content-Type": productData.image.type,
        },
      }
    );

    const product = {
      title: productData.title,
      description: productData.description,
      price: productData.price,
      imageUrl: `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png?alt=media&token=${
        data.downloadTokens || ""
      }`,
    };

    await axios.post(
      `https://${projectID}-default-rtdb.firebaseio.com/${dbCollectionName}.json`,
      product
    );

    console.log("elave olundu");
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.data);
    }
    throw error;
  }
};

export default addProductToFirebase;