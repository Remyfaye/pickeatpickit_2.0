import { homelist } from "@/constants";
import React from "react";

function FirstCarousel() {
  return (
    <div className="flex gap-4 overflow-x-scroll scrollbar-hide mb-7 mt-10">
      {/* Enable horizontal scrolling */}
      {homelist.map((item) => (
        <div
          key={item.id}
          className=" flex-shrink-0 flex flex-col items-center"
        >
          {/* Ensure items don't shrink */}
          <img
            className="h-[100px]  rounded-lg object-cover  "
            src={item.img}
            alt={item.name}
          />
          <p className="my-2">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default FirstCarousel;
