import axios from "axios";

const api = () => {
  const instance = axios.create({
    // baseURL: process.env.BASE_URL,
    baseURL: `https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation/`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    },
  });

  instance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF`;
    return config;
  });

  instance.interceptors.response.use(
    (config) => config,
    (error) => {
      console.log(error?.response);
      return Promise.reject(error);
    }
  );

  return instance;
};

export default api();
