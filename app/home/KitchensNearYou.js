import { kitchensNearYouList } from "@/constants";
import React from "react";

function KitchensNearYou() {
  return (
    <div className="mt-7">
      <h1 className="text-gray-400">Kitchens near you </h1>
      <div className="  mt-5 ">
        {/* Enable horizontal scrolling */}
        {kitchensNearYouList.map((item) => (
          <div
            key={item.id}
            className="flex border-b-2 border-b-black/20 pb-2 gap-5 my-3 flex-shrink-0 items-center"
          >
            {/* Ensure items don't shrink */}
            <img
              className="h-[90px] rounded-lg w-[90px] object-cover  "
              src={item.img}
              alt={item.name}
            />
            <div>
              <p className="my-2">{item.name}</p>
              <p className="my-2">Arrival in 20 minutes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KitchensNearYou;
