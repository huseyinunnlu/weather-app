import axios from "axios";

import { history } from "../../router";

const baseUrl = import.meta.env.VITE_API_URL;

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    history.push("apikey", { replace: true });
    return Promise.reject(error);
  }
);

export const request = (method = "get", params = {}) => {
  let options = {
    method,
    url: `${baseUrl}`,
    params,
  };

  if (!options.params.appId) {
    options.params["appId"] = localStorage.getItem("API_KEY");
  }

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
