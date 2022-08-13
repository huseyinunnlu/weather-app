import React from "react";
import Details from "./Details";
import DetailsFooter from "./DetailsFooter";
import DetailsHeader from "./DetailsHeader";
import DetailsNav from "./DetailsNav";

function WeatherDetails() {
  return (
    <div className="flex flex-col h-[calc(100vh-48px)] py-8">
      <DetailsHeader />
      <DetailsNav />
      <Details />
      <DetailsFooter />
    </div>
  );
}

export default WeatherDetails;
