import React from "react";
import { useSelector } from "react-redux";
import DetailsFooterItem from "./DetailsFooterItem";
import { useDispatch } from "react-redux";

import { setActiveDay } from "../../store/reducers/City";

function DetailsFooter() {
  const { selectedCity } = useSelector((state) => state.city);
  const dispatch = useDispatch();

  const handleActiveDay = (value, index) => {
    dispatch(setActiveDay(value[0]));
  };

  return (
    <div className="flex items-center justify-between mt-auto">
      {Object.entries(selectedCity.datas).map(([key, value]) => (
        <DetailsFooterItem
          key={key}
          index={key}
          value={value}
          handleActiveDay={handleActiveDay}
        />
      ))}
    </div>
  );
}

export default DetailsFooter;
