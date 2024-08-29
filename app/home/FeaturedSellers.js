import { featuredSellersList } from "@/constants";
import React from "react";

function FeaturedSellers() {
  return (
    <div className="bg-gray-100 -mx-5 py-3 px-5">
      <h1 className="text-gray-400">Featured Sellers</h1>
      <div className="flex gap-4 overflow-x-scroll scrollbar-hide mt-5 ">
        {/* Enable horizontal scrolling */}
        {featuredSellersList.map((item) => (
          <div
            key={item.id}
            className="flex flex-col flex-shrink-0 items-center"
          >
            {/* Ensure items don't shrink */}
            <img
              className="h-[90px] rounded-full w-[90px] object-cover  "
              src={item.img}
              alt={item.name}
            />
            <p className="my-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedSellers;
