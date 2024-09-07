import React from "react";

function InputField({ placeholder, image }) {
  return (
    <div className="border-2 my-3 border-gray-300 p-4 rounded-xl flex gap-5">
      <img src={image} alt="ss" />
      <input placeholder={placeholder} />
    </div>
  );
}

export default InputField;
