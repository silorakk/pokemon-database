import React from "react";
import Link from "next/link";
export const NavBar = () => {
  return (
    <nav className="bg-gray-800 fixed inset-x-0 z-50">
      <div className="flex justify-between py-4 mx-12">
        <div className="text-gray-400 flex space-x-4 cursor-pointer">
          <Link href="/" passHref>
            <h1 className="text-white">Pokemon Database</h1>
          </Link>
          <Link href="/" passHref>
            <h1 className="hover:text-white">Home</h1>
          </Link>
          <Link href="/search" passHref>
            <h1 className="hover:text-white">Search Pokemon</h1>
          </Link>
          <Link href="/liked" passHref>
            <h1 className="hover:text-white">Liked Pokemon</h1>
          </Link>
        </div>
        <div className="text-white">
          <h1>Karolis</h1>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
