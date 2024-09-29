import axios from "axios";

async function getProducts() {
  try {
    const response = await axios.get(
      "https://test-foody-admin-default-rtdb.firebaseio.com/products.json"
    );

    const products = response.data
      ? Object.keys(response.data).map((key) => ({
          id: key,
          ...response.data[key],
        }))
      : [];

    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default getProducts;
