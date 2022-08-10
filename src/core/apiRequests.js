import { history } from "../router";
import { request } from "./plugins/axios";

export const checkApiKeyValid = (apiKey) => {
  return request("get", { appId: apiKey, lat: 35, lon: 139 })
    .then((response) => {
      history.push("/");
      localStorage.setItem("API_KEY", apiKey);
      return {
        type: "success",
        message: "Api key is valid",
      };
    })
    .catch((err) => {
      localStorage.removeItem("API_KEY");
      return {
        type: "error",
        message: "Api key is not valid",
      };
    });
};
