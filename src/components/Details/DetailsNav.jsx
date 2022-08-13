import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveType } from "../../store/reducers/City";

function DetailsNav() {
  const dispatch = useDispatch();
  const { navData, activeType } = useSelector((state) => state.city);

  return (
    <div className=" ml-7">
      <ul className="flex text-white h-9 cursor-pointer">
        {navData.map((item, index) => (
          <li
            key={item.value}
            className={`py-1 px-2 hover:border-b-2 border-b-white ${
              index === activeType && "border-b-2"
            }`}
            onClick={(e) => dispatch(setActiveType(index))}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailsNav;
