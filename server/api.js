import react from "react";
import axios from "axios";

const api = axios.create({
  baseURL: 'http://10.122.41.144:3000/',
  
});

export default api;