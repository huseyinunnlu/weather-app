import { createSlice } from "@reduxjs/toolkit";
import citiesJson from "../../core/cities.json";
import { history } from "../../router";
const name = "city";

const initialState = {
  cities: citiesJson,
  selectedCity: false,
  activeData: null,
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
  setSelectedCity(state, action) {
    let data = {
      cityName: action.payload?.city?.name,
      datas: {},
    };

    action.payload?.list.forEach((item) => {
      const date = new Date(item.dt_txt);

      const formattedDate = date.toDateString();
      if (data.datas[formattedDate]) {
        data.datas[formattedDate].push(item);
      } else {
        data.datas[formattedDate] = [item];
      }
    });

    state.selectedCity = data;
    state.activeData = Object.values(data.datas)[0][0];
  },
  setActiveDay(state, action) {
    state.activeData = action.payload;
  },
};

const city = createSlice({
  name,
  initialState,
  reducers,
});

export const { getCities, filterCities, setSelectedCity, setActiveDay } =
  city.actions;

export default city.reducer;
