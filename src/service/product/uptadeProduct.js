import axios from "axios";

const updateProductInFirebase = async (
  productId,
  productData = { title: "", description: "", price: "", image: "" }
) => {
  const storageFolderName = "products";
  const pictureName = productData.image.name.split(".")[0];
  const projectID = "test-foody-admin";
  const dbCollectionName = "products";

  try {
    let imageUrl = "";
    if (productData.image) {
      const { data } = await axios.post(
        `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png?uploadType=media`,
        productData.image,
        {
          headers: {
            "Content-Type": productData.image.type,
          },
        }
      );
      imageUrl = `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png?alt=media&token=${
        data.downloadTokens || ""
      }`;
    }

    const updatedProduct = {
      title: productData.title,
      description: productData.description,
      price: productData.price,
      imageUrl: imageUrl || undefined,
    };

    await axios.patch(
      `https://${projectID}-default-rtdb.firebaseio.com/${dbCollectionName}/${productId}.json`,
      updatedProduct
    );

    console.log("Pradukt tezelendi");
  } catch (error) {
    console.error(error);
    if (error.response) {
      console.error(error.response.data);
    }
    throw error;
  }
};

export default updateProductInFirebase;
