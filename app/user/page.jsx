import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="p-5">
      {" "}
      <div className="flex flex-col justify-center items-center mt-20">
        <img src="../../assets/logo.png" alt="" />
        <h1 className="text-green-700 text-xl">PickEATPickIT</h1>
      </div>
      <div className="flex items-center gap-5 mt-20">
        <p className="bg-gray-100 rounded-xl p-4">+234</p>
        <div className="bg-gray-100 rounded-xl p-3 w-full">
          <input
            type="number"
            className="bg-gray-100 font-bold p-1"
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div className="mt-[45vh]">
        <p></p>
        <Link href="/user/enterCode">
          <button className="btn w-full">Continue</button>
        </Link>
      </div>
    </div>
  );
}

export default page;
