import axios from "axios";

const _apiBase = "http://localhost:3001"

const getCatalogAPI = async () => {
  return await axios.get(`${_apiBase}/catalog`);
}

export {
  getCatalogAPI,
}
