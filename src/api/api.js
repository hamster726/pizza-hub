import axios from "axios";

const _apiBase = "http://localhost:3456"

const getCatalogAPI = async () => {
  return await axios.get(`${_apiBase}/catalog`);
}

export {
  getCatalogAPI,
}
