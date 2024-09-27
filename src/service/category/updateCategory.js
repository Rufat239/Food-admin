import axios from "axios";

async function updatedCategory (id, values={name:"", slug:"", image:"" }){
    const storageFolderName="categories";
    const projectID="test-foody-admin";
    const dbCollectionName="categories";

    let imageUrl=values.url;

    if(values.image&& typeof values.image !=="string"){
        const pictureName= values.image.name.split(".")[0];

        const { data }=await axios.post(
        `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png`,
        values.image,
        {
            headers:{
                "Content-Type":values.image.type,
            },
        }
        );

        imageUrl=`https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png?alt=media&token=${data.downloadTokens}`;
    }

    const category={
        name: values.name,
        slug: values.slug,
        url:imageUrl,
    };

    await axios.put(
        `https://test-foody-admin-default-rtdb.firebaseio.com/${dbCollectionName}/${id}.json`,
        category
    )
}

export default updatedCategory;