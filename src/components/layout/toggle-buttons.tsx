"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ToggleButtons() {
  const [active, setActive] = useState(true);
  return (
    <div className="flex space-x-2 mt-6">
      <div
        className={cn(
          "rounded-full px-4",
          !active ? "bg-[#146EB4] text-white" : "bg-[#e6e6e6]"
        )}
        onClick={() => setActive((prev) => !prev)}
      >
        <Button
          className="p-0 hover:bg-transparent hover:text-inherit text-sm"
          variant={"ghost"}
        >
          Payouts (22)
        </Button>
      </div>
      <div
        className={cn(
          "rounded-full px-4",
          active ? "bg-[#146EB4] text-white" : "bg-[#e6e6e6]"
        )}
        onClick={() => setActive((prev) => !prev)}
      >
        <Button
          className="p-0 hover:bg-transparent hover:text-inherit text-sm"
          variant={"ghost"}
        >
          Refunds (6)
        </Button>
      </div>
    </div>
  );
}
