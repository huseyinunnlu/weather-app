import React from "react";
import ChangeVisibility from "../components/Cities/ChangeVisibility";
import Search from "../components/Cities/Search";
import List from "../components/Cities/List";
import Map from "../components/Cities/Map";

import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

function Index() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const listType = searchParams.get("listType") || "list";

  const handleClick = ({ plateNumber }) => {
    navigate(`${plateNumber}`);
  };

  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-col items-center gap-y-6 justify-center pt-12 w-full">
        <h3 className="text-5xl text-center text-white">Wheater by cities</h3>
        <ChangeVisibility />
        {listType === "map" ? <Map handleClick={handleClick} /> : <List />}
      </div>
    </div>
  );
}

export default Index;
