import axios from "axios";

async function updatedOffer(id, values = { title: "", description: "", image: "" }) {
  const storageFolderName = "offers";
  const projectID = "test-foody-admin";
  const dbCollectionName = "offers";

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

  
  const offer = {
    title: values.title,
    description: values.description,
    url: imageUrl,
  };

  
  await axios.put(
    `https://${projectID}-default-rtdb.firebaseio.com/${dbCollectionName}/${id}.json`,
    offer
  );
}

export default updatedOffer;
