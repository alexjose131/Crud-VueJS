import axios from "axios";

export const API_URL = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default API_URL;
