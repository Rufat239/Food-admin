import axios from "axios";

async function postCategory(values={name:"", slug:"", image:""}) {
    const storageFolderName="categories";
    const pictureName=values.image.name.split(".")[0];
    const projectID="test-foody-admin";
    const dbCollectionName="categories"


    const{data}=await axios.post(
    `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png`,
    values.image,
    {
        headers:{
            "Content-Type":values.image.type,
        },
    }
    );

    const category={
        name: values.name,
        slug: values.slug,
        url:`https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png?alt=media&token=${data.downloadTokens}`
    };

    await axios.post(
       ` https://${projectID}-default-rtdb.firebaseio.com/${dbCollectionName}.json`,
       category
    );
}

export default postCategory;