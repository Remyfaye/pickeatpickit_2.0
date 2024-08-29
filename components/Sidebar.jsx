"use client";
import { sidebarNav } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";

function Sidebar() {
  const [active, setActive] = useState("home");
  return (
    <div className="hidden gap-5 capitalize  text-xl w-[250px] p-5 flex-col lg:flex bg-gray-300 h-screen fixed">
      {sidebarNav.map((item) => (
        <Link
          onClick={() => setActive(item.name)}
          key={item.name}
          href={`${item.name}`}
          className={active === item.name ? "text-black/40" : "text-black"}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
