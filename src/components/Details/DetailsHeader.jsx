import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  formatDate,
  getWeatherIcon,
  kelvinToCelcius,
} from "../../core/helpers";
function DetailsHeader() {
  const { selectedCity, activeData } = useSelector((state) => state.city);

  return (
    <div className="flex items-center">
      <div className="flex items-center gap-x-6">
        <div className="flex items-center">
          <img
            src={getWeatherIcon(activeData.weather[0].icon)}
            alt={activeData.weather[0].description}
          />
          <span className="text-5xl text-bold text-white ml-[-15px] flex items-stretch">
            {kelvinToCelcius(activeData.main.temp)}{" "}
            <span className=" text-lg font-semibold ">°C</span>
          </span>
        </div>
        <div className="flex flex-col leading-5">
          <span className="text-[16px] text-stone-200 flex items-stretch">
            Feels: {kelvinToCelcius(activeData.main.feels_like)}{" "}
            <span className=" text-xs font-semibold ">°C</span>
          </span>
          <span className="text-[16px] text-stone-200">
            Humidity: {activeData.main.humidity} %
          </span>
          <span className="text-[16px] text-stone-200">
            Wind: {Math.round(activeData.wind.speed)} km/h
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 ml-auto">
        <span className="text-white text-2xl font-semibold text-right">
          {selectedCity.cityName},Turkey
        </span>
        <span className="text-white/80 text-md font-semibold text-right">
          {formatDate(activeData.dt_txt, "dddd LT")}
        </span>
        <span className="text-white/80 text-md font-semibold text-right">
          {activeData.weather[0].main}
        </span>
      </div>
    </div>
  );
}

export default DetailsHeader;
