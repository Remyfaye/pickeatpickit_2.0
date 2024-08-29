import { searchAll } from "@/constants";
import React from "react";

function All() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {searchAll.map((item) => (
        <div className="">
          {/* <img src={item.img} className="h-[100px] w-[100px]" /> */}
          <p
            style={{ backgroundImage: `url(${item.img})` }}
            className="bg-no-repeat bg-cover rounded-xl "
          >
            <h1 className="text-white text-2xl flex items-center capitalize justify-center rounded-xl text-center inset-0 bg-black/60 h-[170px] m-auto">
              {item.name}
            </h1>
          </p>
        </div>
      ))}
    </div>
  );
}

export default All;
