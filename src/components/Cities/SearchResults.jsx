import React from "react";
import { useSelector } from "react-redux";
import CityItem from "./CityItem";

function SearchResults() {
  const { cities } = useSelector((state) => state.city);

  return (
    <>
      {cities.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-3">
          {cities.map((city) => (
            <CityItem key={city.plateNumber} city={city} />
          ))}
        </div>
      ) : (
        <div className="text-center mt-4 bg-red-800 bg-opacity-70 text-white text-opacity-1 p-3 rounded-md text-sm min-w-full flex justify-center flex-col gap-y-5">
          No Cities found
        </div>
      )}
    </>
  );
}

export default SearchResults;
