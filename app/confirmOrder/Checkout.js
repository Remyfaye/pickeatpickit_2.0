import React from "react";

function Checkout({ title, value, total, payment }) {
  return (
    <div
      className={`${total && "font-bold text-2xl mt-3"} ${
        payment && "font-bold "
      } flex justify-between my-2`}
    >
      <p>{title}</p>
      <p className={`text-[#228b22] ${payment && "font-bold text-black"}`}>
        {value}
      </p>
    </div>
  );
}

export default Checkout;
