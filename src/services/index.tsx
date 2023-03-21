import axios from "axios";

export const api = axios.create({
  baseURL: "VITE_API_URL",
  timeout: 5000,
});
