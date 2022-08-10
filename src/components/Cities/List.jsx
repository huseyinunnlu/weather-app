import React from "react";
import { useDispatch } from "react-redux";
import { filterCities } from "../../store/reducers/City";
import Search from "./Search";
import SearchResults from "./SearchResults";

function List() {
  const dispatch = useDispatch();
  const filter = (value) => {
    dispatch(filterCities(value));
  };

  return (
    <div className="w-full flex justify-center flex-col gap-y-10">
      <Search filter={filter} />
      <SearchResults />
    </div>
  );
}

export default List;
