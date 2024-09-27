import axios from "axios";

async function postOffer(values = { title: "", description: "", image: "" }) {
  const storageFolderName = "offers";
  const pictureName = values.image.name.split(".")[0];
  const projectID = "test-foody-admin";
  const dbCollectionName = "offers";

  const { data } = await axios.post(
    // `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png`,
    `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png`,
    values.image,
    {
      headers: {
        "Content-Type": values.image.type,
      },
    }
  );

  const offer = {
    title: values.title,
    description: values.description,
    url: `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png?alt=media&token=${data.downloadTokens}`,
  };

  await axios.post(
    `https://${projectID}-default-rtdb.firebaseio.com/${dbCollectionName}.json`,
    offer
  );
}

export default postOffer;
