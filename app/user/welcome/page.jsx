"use client";
import React, { useState } from "react";
import Banners from "./Banners";
import Link from "next/link";

function page() {
  const [nextScreen, setNextScreen] = useState("welcome");
  return (
    <div className="p-5">
      <p className="my-5 text-end text-xl text-[#228B22] font-bold">
        <Link href="/user/signUp">Skip</Link>
      </p>
      {nextScreen === "welcome" && (
        <Banners
          top="welcome"
          image="../../assets/home/welcome.png"
          text=" Welcome to your platform for vendor expertise. Join us and start your
        journey today"
          setNextScreen={setNextScreen}
          next="create your profile"
        />
      )}

      {nextScreen === "create your profile" && (
        <Banners
          top="create your profile"
          image="../../assets/home/createProfile.png"
          text=" Set up your professional profile to showcase your skills and experience"
          setNextScreen={setNextScreen}
          next="list your services"
        />
      )}

      {nextScreen === "list your services" && (
        <Banners
          top="list your services"
          image="../../assets/home/listServices.png"
          text=" Highlight the services you excel at - from chef to catery services"
          setNextScreen={setNextScreen}
          next="set your availability"
        />
      )}

      {nextScreen === "set your availability" && (
        <Banners
          top="set your availability"
          image="../../assets/home/setAvailability.png"
          text=" Highlight the services you excel at - from chef to catery services"
          setNextScreen={setNextScreen}
          next="receive job requests"
        />
      )}

      {nextScreen === "receive job requests" && (
        <Banners
          top="receive job requests"
          image="../../assets/home/receiveRequests.png"
          text=" Get job orders tailored to your skills and location"
          setNextScreen={setNextScreen}
          next="Get started"
        />
      )}

      {nextScreen === "Get started" && (
        <Banners
          top="Get started"
          image="../../assets/home/getStarted.png"
          text="You're one step away from taking orders and growing your business. Let's get started"
          setNextScreen={setNextScreen}
          //   next="Get started"
          done
        />
      )}
    </div>
  );
}

export default page;
