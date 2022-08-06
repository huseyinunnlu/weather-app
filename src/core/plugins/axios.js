import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_API_URL;

axios.interceptors.response.use(function (error) {
  useNavigate("/apikey");
});

export const request = (method = "get", params = {}) => {
  let options = {
    method,
    url: `${baseUrl}`,
    params,
  };

  options.params["appId"] =
    localStorage.getItem("API_KEY") || "48dca452d31a1bab902dd15c7438873e";

  return new Promise((resolve, reject) => {
    axios(options)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
