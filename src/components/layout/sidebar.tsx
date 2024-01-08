"use client";
import { ChevronDown, Wallet } from "lucide-react";

import Logo from "@/components/imports/logo";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/contants";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "100", "200", "900"],
});

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        "p-4 bg-[#1E2640] text-white h-screen sticky top-0 left-0",
        className
      )}
    >
      <div className="flex items-center justify-center">
        <Logo className="h-12 shadow-sm" />
        <div className="flex-1 items-center hidden lg:flex">
          <div className="flex-1 pl-4">
            <h1 className="font-medium text-base">Nishyan</h1>
            <p className="text-xs underline opacity-80 cursor-pointer">
              Visit store
            </p>
          </div>
          <ChevronDown className="cursor-pointer" />
        </div>
      </div>
      <div className="space-y-1 py-4 text-center">
        {routes.map((item, index) => (
          <div key={index}>
            <Button
              variant={"ghost"}
              className="w-full justify-start text-sm font-normal pl-2 opacity-80 hover:opacity-100"
            >
              <item.Icon className="w-5 h-5 lg:mr-4" />
              <span className="lg:block hidden">{item.name}</span>
            </Button>
          </div>
        ))}
      </div>
      <div className="absolute hidden bottom-5 rounded-md bg-opacity-70 bg-[#353C53] lg:flex items-center w-[80%] p-3 space-x-4">
        <Wallet />
        <div className="text-white text-sm">
          <p className="text-xs font-thin">Available Credits</p>
          <p className={font.className}>222.10</p>
        </div>
      </div>
    </div>
  );
}
