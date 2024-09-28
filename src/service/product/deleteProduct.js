import axios from "axios";

async function deletedProduct(id) {
  try {
    await axios.delete(
      `https://test-foody-admin-default-rtdb.firebaseio.com/products/${id}.json`
    );
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    return false;
  }
}

export default deletedProduct;
