import { ChevronRight, HelpCircle } from "lucide-react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "100", "200", "900"],
});

type Props = {
  heading: string;
  amount: string;
  orders: string;
  showOrders?: boolean;
  showFooter?: boolean;
};

export default function DashboardCard({
  heading,
  amount,
  orders,
  showOrders = false,
  showFooter = false,
}: Props) {
  return (
    <div className="shadow-md h-min rounded-lg">
      <div
        className={cn(
          "p-4  space-y-3",
          showFooter ? "rounded-t-lg" : "rounded-lg",
          showFooter ? "text-white bg-[#146EB4]" : "bg-white"
        )}
      >
        <div className="flex items-center">
          <h1>{heading}</h1>
          <HelpCircle className="h-3 w-3 ml-2" />
        </div>
        <div className="flex justify-between items-center">
          <h1 className={cn("text-xl", font.className)}>₹{amount}</h1>
          {showOrders && (
            <div
              className={cn(
                "flex cursor-pointer",
                !showFooter && "text-[#146EB4]"
              )}
            >
              <span className="underline text-sm items-center">
                <span className={cn(font.className, "text-xs")}>{orders}</span>{" "}
                orders
              </span>
              <ChevronRight className="h-5 w-5" />
            </div>
          )}
        </div>
      </div>
      {showFooter && (
        <div className="bg-[#0E4F82] text-white px-4 py-2 rounded-b-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-light">Next payout date:</span>
            <span className={cn(font.className, "text-sm font-light")}>
              Today, 4:00PM
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
