import axios from "axios";
const _apiBase = "https://yesha-pizza-hub-default-rtdb.europe-west1.firebasedatabase.app/"

const getCatalogAPI = async () => {
  return await axios.get(`${_apiBase}/catalog.json`);
}

export {
  getCatalogAPI,
}
