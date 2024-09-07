import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="p-5">
      <div className="my-5">
        <img alt="" />
        <p className="text-center font-bold text-lg">Set Delivery Address</p>
      </div>

      <img className="" alt="" />

      <p className="text-sm text-gray-400">
        jsdjs asdasjd asdjasid djasida jsdsd jsdjs
      </p>

      <div>
        <div className="border-2 border-green-600 py-1 px-3 rounded-xl mt-10">
          <p className="text-sm">Delivery type</p>
          <input className=" py-1" type="text" placeholder="Office" />
        </div>

        <div className="border-2 bg-gray-100 py-1 px-3 rounded-xl mt-3">
          <p className="text-sm">Last name</p>
          <input
            className="bg-gray-100 py-1"
            type="text"
            placeholder="enter last name"
          />
        </div>

        <div className="border-2 bg-gray-100 py-1 px-3 rounded-xl mt-3">
          <p className="text-sm">Email</p>
          <input
            className="bg-gray-100 py-1"
            type="text"
            placeholder="enter email address"
          />
        </div>
      </div>

      {/* button */}
      <Link href="/user/welcome">
        <button className="btn w-full mt-[35vh]">Contine</button>
      </Link>
    </div>
  );
}

export default page;
