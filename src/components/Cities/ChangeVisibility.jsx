import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function ChangeVisibility() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [listType, setListType] = useState(
    searchParams.get("listType") || "list"
  );

  const buttons = [
    {
      label: "List",
      value: "list",
    },
    {
      label: "Map",
      value: "map",
    },
  ];

  const changeType = (type) => {
    if (type !== listType) {
      setListType(type);
      navigate(`/?listType=${type}`);
    }
  };

  return (
    <div className=" border-2  rounded-full max-w-[200px] w-full">
      <div className="flex justify-between text-center py-1 px-2 bg-violet-800 rounded-full w-full">
        {buttons.map((item) => (
          <button
            key={item.value}
            className={`text-white flex-1 ${
              listType === item.value && "selector"
            }`}
            onClick={(e) => changeType(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ChangeVisibility;
