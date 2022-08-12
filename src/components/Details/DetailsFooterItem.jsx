import React from "react";
import {
  formatDate,
  getWeatherIcon,
  kelvinToCelcius,
} from "../../core/helpers";
import { useSelector } from "react-redux";

function DetailsFooterItem({ index, value, handleActiveDay }) {
  const { activeData } = useSelector((state) => state.city);
  return (
    <div
      className={`flex flex-col text-center items-center cursor-pointer p-2 hover:bg-stone-100/20 rounded ${
        formatDate(activeData.dt_txt, "YYYY-MM-DD") ===
          formatDate(value[0].dt_txt, "YYYY-MM-DD") && "bg-stone-100/20"
      }`}
      onClick={(e) => handleActiveDay(value)}
    >
      <span className="text-white lg:text-xl md:text-lg mb-[-20px]">
        {index.slice(0, 3)}
      </span>
      <img
        src={getWeatherIcon(value[0].weather[0].icon)}
        className="w-full h-full"
      />
      <span className="text-white text-l mt-[-20px]">
        {`${kelvinToCelcius(value[0].main.temp_max)} | ${kelvinToCelcius(
          value[0].main.temp_min
        )} °C`}
      </span>
    </div>
  );
}

export default DetailsFooterItem;
