import React from "react";

function SearchHeader() {
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <img />
        <h1 className="text-xl font-bold">Search</h1>
        <img />
      </div>
      <div className="border-2 border-black/10 rounded-xl p-3 my-5">
        <img />
        <input
          className="w-full"
          placeholder="Search for available home services"
        />
      </div>
    </div>
  );
}

export default SearchHeader;
