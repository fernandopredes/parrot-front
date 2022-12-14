import axios from 'axios';


const api = axios.create({
  // Esperar para saber o localhost
  baseURL: 'http://localhost:3000',
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
    "Content-Type": "application/json;charset=UTF-8"  
  }
});

export default api;
