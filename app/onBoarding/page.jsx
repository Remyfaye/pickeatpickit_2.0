import { onBoardingToggOptions } from "@/constants";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="p-5 ">
      <div className="flex flex-col justify-center items-center mt-20">
        <img src="../../assets/logo.png" alt="" />
        <h1 className="text-green-700 text-xl">PickEATPickIT</h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-32">
        {onBoardingToggOptions.map((item) => (
          <Link
            href={`/${item.name}`}
            className="bg-gray-100 capitalize w-full text-center rounded-xl p-4 my-2 text-green-600 text-lg"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
