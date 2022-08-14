import React, { useEffect, useMemo, useState } from "react";
import { Chart } from "react-charts";
import { useDispatch, useSelector } from "react-redux";
import { formatDate, kelvinToCelcius } from "../../core/helpers";
import { setActiveDay } from "../../store/reducers/City";
function Details() {
  const dispatch = useDispatch();
  const { activeData, selectedCity, navData, activeType } = useSelector(
    (state) => state.city
  );
  const [data, setData] = useState(false);

  const selectedType = navData[activeType];

  useMemo(() => {
    setData([
      {
        data: selectedCity.datas[
          formatDate(activeData.dt_txt, "ddd MMM DD YYYY")
        ],
      },
    ]);
  }, [activeData]);

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => formatDate(datum.dt_txt, "h:mm a"),
    }),
    [activeType]
  );
  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => {
          if (selectedType.translate) {
            return kelvinToCelcius(datum.main[selectedType.value]);
          }

          return datum.main[selectedType.value];
        },
        elementType: "area",
      },
    ],
    [activeType]
  );
  return (
    <div className="max-h-[50%] min-h-[150px] h-full my-auto cursor-pointer">
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          onClickDatum: (e) => {
            dispatch(setActiveDay(e.originalDatum));
          },
        }}
      />
    </div>
  );
}

export default Details;

/**
 * const { activeData, selectedCity } = useSelector((state) => state.city);

  console.log(
    selectedCity.datas[formatDate(activeData.dt_txt, "ddd MMM DD YYYY")]
  );

  const data = {
    label: "Weather",
    data: selectedCity.datas[formatDate(activeData.dt_txt, "ddd MMM DD YYYY")],
  };

  const primaryAxis = useMemo(
    () => ({
      getValue: (datum) => datum.dt,
    }),
    []
  );
  const secondaryAxes = useMemo(
    () => [
      {
        getValue: (datum) => datum.dt,
      },
    ],
    []
  );
 */
