import React from "react";
import Header from "./Header";
import { homelist } from "@/constants";
import FirstCarousel from "./FirstCarousel";
import FeaturedSellers from "./FeaturedSellers";
import KitchensNearYou from "./KitchensNearYou";
import Sidebar from "@/components/Sidebar";
import Food from "../search/Food";

function Home() {
  return (
    <div>
      <Sidebar />
      <div className="p-5 max-w-3xl m-auto">
        <Header />
        <FirstCarousel />
        <div className="text-gray-400 mb-5">
          <h1>Special Offer</h1>
          <img className="w-full " src="./assets/home/Group 16.png" alt="ss" />
        </div>

        <FeaturedSellers />
        <KitchensNearYou />
        <Food />
      </div>
    </div>
  );
}

export default Home;
