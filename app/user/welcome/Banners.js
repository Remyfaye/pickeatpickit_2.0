import Link from "next/link";
import React from "react";

function Banners({ done, next, top, text, image, setNextScreen }) {
  return (
    <div>
      <h1 className="font-bold text-xl capitalize text-center my-5">{top}</h1>
      <img src={image} alt="" />
      <p className="my-5 text-green-600">{text}</p>
      {/* button */}

      {/* done */}
      {done ? (
        <Link href="/user/signUp">
          <button className="btn w-full mt-5">Done</button>
        </Link>
      ) : (
        <button
          onClick={() => setNextScreen(next)}
          className="btn w-full mt-10"
        >
          Next
        </button>
      )}
    </div>
  );
}

export default Banners;
