import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-green-700 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <Link
              href="/"
              className="text-white hover:bg-green-600 px-3 py-2 rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:bg-green-600 px-3 py-2 rounded-lg"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white hover:bg-green-600 px-3 py-2 rounded-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
