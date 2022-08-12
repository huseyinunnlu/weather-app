import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Header from "../components/Layout/Header";
import WeatherDetails from "../components/Details/WeatherDetails";
import { fetchCityByPlate } from "../core/apiRequests";
import Loader from "../components/Ui/Loader";

function Details() {
  const [isReady, setIsReady] = useState(false);
  const { selectedCity } = useSelector((state) => state.city);
  const params = useParams();
  async function fetchData() {
    await fetchCityByPlate(params.id);
    await setIsReady(true);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto w-screen h-screen">
      <Header />
      {isReady ? <WeatherDetails /> : <Loader />}
    </div>
  );
}

export default Details;
