import React from "react";
import Header from "./Header";
import { homelist } from "@/constants";
import FirstCarousel from "./FirstCarousel";
import FeaturedSellers from "./FeaturedSellers";
import KitchensNearYou from "./KitchensNearYou";
import Sidebar from "@/components/Sidebar";

function Home() {
  return (
    <div>
      <Sidebar />
      <div className="p-5 max-w-3xl m-auto">
        <Header />
        <FirstCarousel />
        <FeaturedSellers />
        <KitchensNearYou />
      </div>
    </div>
  );
}

export default Home;
