"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function _Search() {
  return (
    <>
      <div className="relative hidden w-[400px] lg:flex items-center bg-[#f2f2f2] px-4 rounded-md">
        <Search className="h-4 w-4 mr-2 text-[#808080]" />
        <Input
          type="search"
          placeholder="Search features, tutorials, etc."
          className="w-full text-[#808080] bg-transparent border-none outline-none focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:border-none ring-0 focus-visible:ring-0 p-0"
        />
      </div>
    </>
  );
}
