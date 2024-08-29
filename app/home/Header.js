import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="bg-gray-100 rounded-xl p-3 flex items-center gap-1">
          <img src="./assets/profile.png" alt="ss" />
          <p>Welcome, notjustomt</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-3">
          <img />
          <img />
          <Link className="flex justify-center items-center" href="/search">
            <img className="w-full m-auto" src="./assets/search.png" alt="ss" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
