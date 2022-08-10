import React from "react";
import { NavLink } from "react-router-dom";

function CityItem({ city }) {
  return (
    <NavLink
      to={`/${city.plateNumber}`}
      className="flex items-center cursor-pointer bg-indigo-900 rounded-full p-2 w-full"
    >
      <h4 className=" text-4xl font-medium text-white p-2 bg-violet-900 rounded-full">
        {city.plateNumber}
      </h4>
      <span className="text-center text-xl text-stone-300 ml-3 mr-5">
        {city.name}
      </span>
    </NavLink>
  );
}

export default CityItem;
