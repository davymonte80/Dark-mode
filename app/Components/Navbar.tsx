import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-700 py-4">
      <ul className="flex gap-4 items-center justify-center">
        <li>
          <Link href="/">
            {" "}
            <a className="text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">
            {" "}
            <a className="text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Contact
            </a>
          </Link>
        </li>
      </ul>                                                                                                                                                     
    </nav>
  );
};

export default Navbar;
