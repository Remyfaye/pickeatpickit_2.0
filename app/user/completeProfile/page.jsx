import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="p-5">
      <div className="my-10">
        <img alt="" />
        <p className="text-center font-bold text-lg">Complete Profile</p>
      </div>

      <p>Let us Know how to properly address you</p>

      <div className="border-2 border-green-600 py-1 px-3 rounded-xl mt-10">
        <p className="text-sm">first name</p>
        <input className=" py-1" type="text" placeholder="enter First name" />
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

      {/* button */}
      <Link href="/user/setDeliveryAddress">
        <button className="btn w-full mt-[35vh]">Contine</button>
      </Link>
    </div>
  );
}

export default page;
