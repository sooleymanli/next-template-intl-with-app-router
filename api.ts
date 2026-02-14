import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  timeout: 0,

  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const separator = config.url?.includes("?") ? "&" : "?";

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;