import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="bg-gray-100 rounded-xl p-3">
          <img />
          <p>Welcome, notjustomt</p>
        </div>
        <div className="bg-gray-100 rounded-xl p-3">
          <img />
          <img />
          <Link href="/search">
            <img className="w-full " src="./assets/search.png" alt="ss" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
