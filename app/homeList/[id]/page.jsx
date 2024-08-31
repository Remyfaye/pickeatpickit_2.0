"use client";
import { foodList, homelist, kitchensNearYouList } from "@/constants";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  const { id } = useParams();
  const res = homelist.filter((item) => item.id === id);
  const kitchen = res[0];
  console.log(kitchen);
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex justify-between p-5">
        <img alt="" />
        <h1 className="text-xl font-[600]">{kitchen.name}</h1>
        <img alt="" />
      </div>
      <img
        className="w-full h-[26vh] object-cover absolute"
        src={kitchen.img}
        alt=""
      />

      {/* floater  */}
      <div className="bg-white items-center rounded-xl shadow-xl m-7 p-5 relative top-[10rem] flex justify-between">
        <div>
          <p className="font-bold"> {kitchen.name}</p>
          <p>
            <p className="my-3 text-sm ">Lekki Phase 1, Lagos Nigeria</p>
          </p>
        </div>
        <div>
          <p className="my-3 text-sm text-gray-400">Allergies?</p>
          <button className="btn-full ">Call</button>
        </div>
      </div>

      {/* category */}
      <div className="mt-[12rem] flex justify-evenly">
        <div>
          <h1 className="font-bold">Category</h1>
          <p>{kitchen.category}</p>
        </div>

        <p className="w-[2px] h-[3rem] bg-gray-400"></p>

        <div className="border-l-2 ">
          <h1 className="font-bold">Profession</h1>
          <p>{kitchen.profession}</p>
        </div>
      </div>

      {/* description */}
      <div className="bg-white items-center rounded-xl shadow-xl m-7 p-5">
        <p className="mt-3 text-xl font-bold text-[#228B22] ">Description</p>
        <p className="mb-3 mt-2 w-full h-[0.5px] bg-black/20 "></p>
        <p className=" font-light"> {kitchen.description}</p>
      </div>

      {/* call to action */}
      <button className="bottom-[-7%] text-xl btn w-[70%] m-auto flex justify-center  relative  ">
        <Link href={`/confirmOrder/${id}`}>Order</Link>
      </button>
    </div>
  );
}

export default page;
