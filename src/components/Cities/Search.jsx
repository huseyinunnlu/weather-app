import React from "react";

function Search({ filter }) {
  return (
    <div className="md:w-[50%] sm:w-[80%] px-3 w-full mx-auto">
      <input
        type="text"
        className="w-full py-2 px-3 bg-stone-600 rounded-l text-white placeholder:text-white-700 border-slate-900 border-1"
        placeholder="Search by city name or plate number."
        onBlur={(e) => filter(e.target.value)}
      />
    </div>
  );
}

export default Search;
