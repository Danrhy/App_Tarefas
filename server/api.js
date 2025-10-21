import react from "react";
import axios from "axios";

const api = axios.create({
  baseURL: 'https://68e447c28e116898997b7339.mockapi.io/teste/',
  
});

export default api;