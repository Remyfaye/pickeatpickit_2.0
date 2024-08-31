import { useParams } from "next/navigation";
import React from "react";

function page() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <img alt="" />
      <p>{id}</p>
    </div>
  );
}

export default page;
