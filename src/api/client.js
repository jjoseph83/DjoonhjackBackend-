import axios from "axios";

const api = axios.create({
  baseURL: "http://YOUR_DEVICE_IP:5000", // Remplace par l'IP de ton appareil
  timeout: 5000,
});

export default api;

