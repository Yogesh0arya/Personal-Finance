"use client";

import SideMenu from "@/components/SideMenu";
import "../globals.css";
import NavBar from "@/components/NavBar";
import { Button } from "../../components/ui/button";
import { PenBox } from "lucide-react";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  return (
    <html lang="en">
      <body className="w-screen overflow-x-hidden">
        <NavBar />
        <div className="flex">
          <SideMenu />

          <section className="p-5 bg-gray-50 flex-1 min-h-[92vh]">
            <div className="flex justify-between">
              <h1 className="text-xl md:text-2xl lg:text-4xl font-medium">
                Welcome back, Yogesh
              </h1>
              <Button
                onClick={() => router.push("/addTransaction")}
                className="flex items-center gap-2"
              >
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </div>
            {children}
          </section>
        </div>
        <ToastContainer />
      </body>
    </html>
  );
}
