import axios from "axios";

axios.defaults.baseURL = "https://mockmate-d7r1.onrender.com";

axios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axios;

