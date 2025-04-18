"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  ChevronsDown,
  ChevronsUp,
  HandCoins,
  LayoutDashboard,
  LibraryBig,
  LogOut,
  PiggyBank,
  Settings,
} from "lucide-react";

function SideMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* Desktop view */}
      <div className="sticky top-[8vh] hidden py-5 px-2 h-[92vh] bg-green-500 sm:w-[150px] md:w-[200px] lg:w-[300px] text-white  font-medium gap-4 sm:flex sm:flex-col justify-between text-lg lg:text-xl">
        <div className="flex flex-col gap-2">
          <Link
            href="/dashboard"
            className={`${
              pathname == "/dashboard" && "bg-green-700"
            } hover:bg-green-100 rounded-sm p-2 text-start hover:text-black flex items-center gap-2`}
          >
            <LayoutDashboard />
            Overview
          </Link>
          <Link
            href="/dashboard/detailedRecords"
            className={`${
              pathname == "/dashboard/detailedRecords" && "bg-green-700"
            } hover:bg-green-100 rounded-sm p-2 text-start hover:text-black flex items-center gap-2`}
          >
            <LibraryBig />
            Detailed Records
          </Link>
          <Link
            href="/dashboard/monthlyExpenses"
            className={`${
              pathname == "/dashboard/monthlyExpenses" && "bg-green-700"
            } hover:bg-green-100 rounded-sm p-2 text-start hover:text-black flex items-center gap-2`}
          >
            <HandCoins />
            Monthly Expenses
          </Link>
          <Link
            href="/dashboard/budgetPlanning"
            className={`${
              pathname == "/dashboard/budgetPlanning" && "bg-green-700"
            } hover:bg-green-100 rounded-sm p-2 text-start hover:text-black flex items-center gap-2`}
          >
            <PiggyBank />
            Budget Planning
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <button className="cursor-pointer hover:bg-green-100 rounded-sm p-2 text-start hover:text-black flex items-center gap-2">
            <Settings />
            Settings
          </button>
          <button className="cursor-pointer hover:bg-green-100 rounded-sm p-2 text-start hover:text-black flex items-center gap-2">
            <LogOut />
            Logout
          </button>
        </div>
      </div>

      {/* Mobile View */}

      <div className="z-40 sm:hidden absolute bottom-12 left-10">
        {open && (
          <div className="flex flex-col gap-4 items-start mb-2 bg-black text-white text-md rounded-md shadow-2xl p-2">
            <Link
              onClick={() => setOpen(!open)}
              href="/dashboard/"
              className="cursor-pointer"
            >
              Overview
            </Link>
            <Link
              onClick={() => setOpen(!open)}
              href="/dashboard/detailedRecords"
              className="cursor-pointer"
            >
              Detailed Records
            </Link>
            <Link
              onClick={() => setOpen(!open)}
              href="/dashboard/monthlyExpenses"
              className="cursor-pointer"
            >
              Monthly Expenses
            </Link>
            <Link
              onClick={() => setOpen(!open)}
              href="/dashboard/budgetPlanning"
              className="cursor-pointer"
            >
              Budget Planning
            </Link>
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="bg-black p-2 text-white rounded-full cursor-pointer"
        >
          {!open ? <ChevronsUp size={32} /> : <ChevronsDown size={32} />}
        </button>
      </div>
    </>
  );
}

export default SideMenu;
