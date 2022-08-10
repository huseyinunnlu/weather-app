import { createSlice } from "@reduxjs/toolkit";
import citiesJson from "../../core/cities.json";
import { history } from "../../router";
const name = "city";

const initialState = {
  cities: citiesJson,
};
const reducers = {
  getCities(state, action) {
    return state.cities;
  },
  filterCities(state, action) {
    const keyword = action.payload.toLowerCase();

    state.cities = citiesJson.filter((city) => {
      const parsedCity = city.name.toLocaleLowerCase("tr-TR");
      return parsedCity.toLowerCase().indexOf(keyword) > -1;
    });
  },
};

const city = createSlice({
  name,
  initialState,
  reducers,
});

export const { getCities, filterCities } = city.actions;

export default city.reducer;
