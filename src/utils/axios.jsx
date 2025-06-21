// src/utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  // withCredentials: true // Uncomment if needed for cookies/auth
});

// Request interceptor
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
