"use client";
import { foodList, homelist } from "@/constants";
import { useParams } from "next/navigation";
import React from "react";
import Checkout from "../Checkout";

function page() {
  const { id } = useParams();
  const res = foodList.filter((item) => item.id === id);
  const food = res[0];
  return (
    <div>
      <div className="flex justify-evenly border-b-2 p-5">
        <img />
        <h1 className="text-xl font-bold">Confirm Order</h1>
        <p></p>
      </div>
      <div className="p-7">
        {/* top */}
        <div className="flex gap-5">
          <img
            className="w-[150px] h-[150px] rounded-xl object-cover"
            src={food.img}
            alt="ss"
          />
          <div>
            <h1 className="font-bold text-2xl">{food.name}</h1>
            <h1 className="text-[#228B22]">{food.price}</h1>
            <h1 className=" mt-10">15min | $22</h1>
          </div>
        </div>

        {/* description */}
        <p className="my-3">{food.description}</p>

        {/* write instructions */}
        <div className="border-y-2 mt-10 text-sm pt-5 text-[#228b22]">
          <p> Write instruction for the kitchen such as allergies</p>
          <input className="w-full my-3" placeholder="" />
        </div>

        {/* checkout */}
        <div className="mt-5">
          <Checkout title="Services Charges:" value="$0.15" />
          <Checkout title="Delivery Charges:" value="$1.45" />
          <Checkout title="Payment Mode:" value="$1.45" payment />
          <Checkout title="Total" value={food.price} total />

          <div className="mt-5 flex items-center justify-between gap-10">
            <div>
              <p>DELIVER TO</p>
              <p className="text-sm">
                Old Male Hostel University of Abuja, Block A| Room 302
              </p>
            </div>
            <p className="text-[#228B22]">Change</p>
          </div>
        </div>

        {/* buttons */}
        <div className="flex justify-between mt-20">
          <button className="btn-trans">Cancel order</button>
          <button className="btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default page;
