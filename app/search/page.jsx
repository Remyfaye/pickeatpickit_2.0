"use client";
import React, { useState } from "react";
import SearchHeader from "./header";
import { searchToggOptions } from "@/constants";
import All from "./all";
import SpecialOffers from "./specialOffers";
import KitchensNearYou from "../home/KitchensNearYou";
import Food from "./Food";
import Sidebar from "@/components/Sidebar";

function page() {
  const [active, setActive] = useState("all");
  return (
    <div className="">
      <Sidebar />
      <div className="p-5 m-auto max-w-3xl">
        <SearchHeader />
        <div className="flex lg:justify-evenly justify-between py-5 lg:bg-white bg-gray-100 -mx-5 px-5 mb-5">
          {searchToggOptions.map((item) => (
            <div
              className={
                active === item.name
                  ? "bg-green-600 text-white capitalize px-4 rounded-xl py-3"
                  : "bg-gray-200 px-4 rounded-xl py-3"
              }
              onClick={() => setActive(item.name)}
            >
              {item.name}
            </div>
          ))}
        </div>
        {active === "all" && <All />}
        {active === "special offers" && <SpecialOffers />}
        {active === "Sellers" && <KitchensNearYou />}
        {active === "food" && <Food />}
      </div>
    </div>
  );
}

export default page;
