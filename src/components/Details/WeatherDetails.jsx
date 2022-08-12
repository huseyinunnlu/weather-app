import React from "react";
import DetailsFooter from "./DetailsFooter";
import DetailsHeader from "./DetailsHeader";

function WeatherDetails() {
  return (
    <div className="flex flex-col h-[calc(100vh-48px)] py-8">
      <DetailsHeader />
      <DetailsFooter />
    </div>
  );
}

export default WeatherDetails;
