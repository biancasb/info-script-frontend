import axios from "axios";

// Base URL from Vite env or default
const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    // You can add toast/redirect logic here
    return Promise.reject(err);
  }
);

export default api;
