import { ArrowUpDown, Download, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { invoices } from "@/lib/contants";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "100", "200", "900"],
});

export default function DataTable() {
  return (
    <div className="shadow-md mt-6 p-4 rounded-md bg-white">
      <div className="flex">
        <div className="flex-1">
          <div className="relative hidden md:flex items-center px-4 rounded-md w-[300px] border border-[#cecece]">
            <Search className="h-4 w-4 mr-2 text-[#808080]" />
            <Input
              type="search"
              placeholder="Order ID or transaction ID"
              className="w-full text-[#808080] bg-transparent border-none outline-none focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:border-none ring-0 focus-visible:ring-0 p-0 text-sm"
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="border border-[#cecece] text-sm rounded-md flex items-center px-4 py-2 cursor-pointer">
            Sort <ArrowUpDown className="h-4 w-4 ml-2" />
          </div>
          <div className="border border-[#cecece]  rounded-md p-[0.625rem] cursor-pointer">
            <Download className="h-4 w-4" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Table className="rounded-md overflow-scroll">
          <TableHeader>
            <TableRow className="bg-[#f2f2f2] text-black">
              <TableHead>OrderId</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Transaction ID</TableHead>
              <TableHead>Refund Date</TableHead>
              <TableHead className="text-right">Order amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.orderId}>
                <TableCell>
                  <span className={cn("text-sky-700", font.className)}>
                    #{invoice.orderId}
                  </span>
                </TableCell>
                <TableCell className="font-medium">
                  <span
                    className={cn(
                      "h-1 w-1 p-1 inline-block rounded-full mr-2",
                      invoice.status === "Successful"
                        ? "bg-green-500"
                        : "bg-gray-500"
                    )}
                  />
                  {invoice.status}
                </TableCell>
                <TableCell className={font.className}>
                  {invoice.transactionId}
                </TableCell>
                <TableCell className={font.className}>
                  {invoice.refundDate}
                </TableCell>
                <TableCell className={cn("text-right", font.className)}>
                  ₹{invoice.orderAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
