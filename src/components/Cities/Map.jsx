import React from "react";
import TurkeyMap from "turkey-map-react";

function Map({ handleClick }) {
  return (
    <TurkeyMap
      customStyle={{ idleColor: "#fff", hoverColor: "#999" }}
      onClick={({ plateNumber }) => handleClick({ plateNumber })}
      showTooltip={true}
    />
  );
}

export default Map;
