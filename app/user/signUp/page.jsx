import React from "react";
import InputField from "./InputField";
import Link from "next/link";

function page() {
  return (
    <div className="p-5">
      <div className="flex flex-col justify-center items-center mt-5">
        <img src="../../assets/logo.png" alt="" />
        <h1 className="text-green-700 text-xl font-bold">PickEATPickIT</h1>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-2xl">Personal Info</h1>
        <p className=" text-sm">
          To continue, kindly complete the following fields.
        </p>

        <div className="mt-5">
          <InputField
            image="../../assets/icons/user.png"
            placeholder="Full Name"
          />

          <InputField
            image="../../assets/icons/email.png"
            placeholder="Email Address"
          />

          <InputField
            image="../../assets/icons/phone.png"
            placeholder="Phone Number"
          />

          <InputField
            image="../../assets/icons/lock.png"
            placeholder="Password"
          />

          <InputField
            image="../../assets/icons/lock.png"
            placeholder="Retype Password"
          />
        </div>

        <p className="my-10 text-center">
          Already have an account? <span className="font-bold">Sign in</span>
        </p>

        <Link href="/home">
          <button className="btn w-full">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default page;
