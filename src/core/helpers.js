import moment from "moment";

export const getWeatherIcon = (key) => {
  return `http://openweathermap.org/img/wn/${key}@2x.png`;
};

export const kelvinToCelcius = (value) => {
  return Math.round(value - 273);
};

export const formatDate = (date, pattern) => {
  return moment(date).format(pattern);
};
