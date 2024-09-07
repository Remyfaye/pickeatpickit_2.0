import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="p-5">
      <div className="">
        <img alt="" />
        <p className="text-center font-bold text-lg">Enter Code</p>
      </div>

      {/* input */}
      <div className="flex gap-3 justify-center mt-20">
        <input
          type="number"
          className="bg-gray-100 rounded-lg w-[60px] h-[60px]"
        />
        <input
          type="number"
          className="bg-gray-100 rounded-lg w-[60px] h-[60px]"
        />
        <input
          type="number"
          className="bg-gray-100 rounded-lg w-[60px] h-[60px]"
        />
        <input
          type="number"
          className="bg-gray-100 rounded-lg w-[60px] h-[60px]"
        />
      </div>

      {/* text */}
      <div className=" text-gray-400 text-center mt-10">
        <p> Enter the</p>
        <p> +234 6 7838</p>
      </div>

      {/* button */}
      <Link href="/user/completeProfile">
        <button className="btn w-full mt-[50vh]">Contine</button>
      </Link>
    </div>
  );
}

export default page;
