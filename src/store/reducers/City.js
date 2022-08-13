import { createSlice } from "@reduxjs/toolkit";
import citiesJson from "../../core/cities.json";
import { history } from "../../router";
const name = "city";

const initialState = {
  cities: citiesJson,
  navData: [
    {
      label: "Weather °C",
      value: "temp",
      translate: true,
    },
    {
      label: "Feels °C",
      value: "feels_like",
      translate: true,
    },
    {
      label: "Humidity %",
      value: "humidity",
      translate: false,
    },
  ],
  selectedCity: false,
  activeData: null,
  activeType: 0,
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
  setActiveType(state, action) {
    state.activeType = action.payload || 0;
  },
};

const city = createSlice({
  name,
  initialState,
  reducers,
});

export const {
  getCities,
  filterCities,
  setSelectedCity,
  setActiveDay,
  setActiveType,
} = city.actions;

export default city.reducer;
