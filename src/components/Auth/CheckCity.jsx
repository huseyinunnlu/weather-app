import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";

function CheckCity({ children }) {
  const { cities } = useSelector((state) => state.city);
  const params = useParams();

  const foundedCity = cities.find((city) => {
    return city.plateNumber === params.id;
  });

  if (!foundedCity) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
}

export default CheckCity;
