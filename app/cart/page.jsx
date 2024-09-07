import { foodList } from "@/constants";
import React from "react";

function page() {
  return (
    <div className="p-5">
      <div className="">
        <img alt="" />
        <p className="text-center font-bold text-lg">Cart</p>
      </div>
      <div>
        {foodList.map((item) => (
          <div className="border-b-2 my-3 py-4 flex  gap-10">
            <div className="flex gap-5">
              <img className="w-[120px] " src={item.img} alt="ss" />
              <div>
                <p className="fontbold text-xl capitalize"> {item.name}</p>
                <p className="text-[#228B22]">30% off</p>
              </div>
            </div>

            <div>
              <div className="flex gap-3 items-center">
                <p className="bg-gray-100 p-3 h-[40px] flex justify-center items-center text-xl mx-auto">
                  -
                </p>
                <p className="text-xl">0</p>
                <p className="bg-gray-100 p-3 h-[40px] flex justify-center items-center text-xl mx-auto">
                  +
                </p>
              </div>
              <button className="bg-[#d7e4d736] text-xs py-2 px-5  rounded-lg mt-10  shadow-md text-[#228B22]">
                Order now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
