"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AlignJustify, LayoutDashboard } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

function NavBar() {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 bg-white z-50">
      <div className="md:text-xl  max-w-7xlxl mx-auto flex justify-between items-center px-5 h-[8vh]">
        {/* logo */}
        <Link href="/" className="text-xl lg:text-3xl cursor-pointer font-bold">
          Personal <span className="text-green-500">Finance</span>
        </Link>

        {/* Navbar */}
        <div className="hidden sm:flex gap-3 lg:gap-12 font-medium">
          <Link className={`${pathname == "/" && "text-green-500"}`} href="/">
            Home
          </Link>
          <Link
            className={`${pathname == "/pricing" && "text-green-500"}`}
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className={`${pathname == "/about" && "text-green-500"}`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`${pathname == "/contact" && "text-green-500"}`}
            href="/contact"
          >
            Contact
          </Link>
        </div>

        <Button asChild variant="outline">
          <Link
            href="/dashboard"
            className="mr-4 sm:mr-0 p-2 bg-green-500 rounded-sm text-white font-black"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
        </Button>
      </div>

      <button
        className="absolute right-2 top-6 sm:hidden"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        <AlignJustify />
      </button>

      <div
        className={`z-50 absolute flex flex-col text-xl sm:hidden gap-3 w-screen bg-black text-white p-5 h-[92vh] transition-all ease-in-out ${
          openSideMenu ? "-right-0" : "-right-[100%]"
        }`}
      >
        <Link href="/" onClick={() => setOpenSideMenu(!openSideMenu)}>
          Home
        </Link>
        <Link href="/pricing" onClick={() => setOpenSideMenu(!openSideMenu)}>
          Pricing
        </Link>
        <Link href="/about" onClick={() => setOpenSideMenu(!openSideMenu)}>
          About
        </Link>
        <Link href="/contact" onClick={() => setOpenSideMenu(!openSideMenu)}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
