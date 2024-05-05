// components/Navbar.tsx

import Link from "next/link";
import LoginForm from "./auth/LoginForm";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              My Website
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>

              <LoginForm />

              {/*  more nav items as needed */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
