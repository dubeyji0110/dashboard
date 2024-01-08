import { ChevronDown, HelpCircle, MessageSquareMore } from "lucide-react";
import React from "react";
import { _Search as Search } from "./search";

// import MainNav from "../../client/main-nav";
// import { Search } from "../../client/search";
export default function SiteHeader() {
  return (
    <div className="border-b sticky top-0 left-0 bg-white">
      <div className="flex h-16 items-center px-6 w-full">
        <span className="font-medium lg:text-xl text-lg mr-2">Payouts</span>
        <span className="text-muted-foreground font-light flex items-center text-xs cursor-help">
          <HelpCircle className="h-3 w-3 mr-1" />
          How it works
        </span>
        <div className="m-auto">
          <Search />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="rounded-full bg-[#e6e6e6] p-2 cursor-pointer">
            <MessageSquareMore className="h-5 w-5 text-[#4d4d4d]" />
          </div>
          <div className="rounded-full bg-[#e6e6e6] p-2 cursor-pointer">
            <ChevronDown className="h-5 w-5 text-[#4d4d4d]" />
          </div>
        </div>
      </div>
    </div>
  );
}
