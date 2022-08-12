import { history } from "../router";
import { request } from "./plugins/axios";
import store from "../store";
import { setSelectedCity } from "../store/reducers/City";

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

export const fetchCityByPlate = (plateNumber) => {
  const cities = store.getState().city.cities;
  const selectedCity = cities.find((city) => city.plateNumber === plateNumber);

  return request("get", { lat: selectedCity.lat, lon: selectedCity.lon })
    .then((res) => store.dispatch(setSelectedCity(res.data)))
    .catch((err) => store.dispatch(setSelectedCity(false)));
};
