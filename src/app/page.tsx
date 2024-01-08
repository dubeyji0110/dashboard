import DashboardCard from "@/components/layout/dashboard-card";
import DataTable from "@/components/layout/table";
import ToggleButtons from "@/components/layout/toggle-buttons";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Home() {
  return (
    <div className="p-8 pt-6 space-y-4 bg-[#f1f1f1] flex-1 overflow-scroll">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium">Overview</h1>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue className="font-light" placeholder="This Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="This Month">This Month</SelectItem>
              <SelectItem value="Last Month">Last Month</SelectItem>
              <SelectItem value="Last 6 Months">Last 6 Months</SelectItem>
              <SelectItem value="This Year">This Year</SelectItem>
              <SelectItem value="Last Year">Last Year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <DashboardCard
          amount="2,312.23"
          orders="23"
          heading="Next Payout"
          showOrders
          showFooter
        />
        <DashboardCard
          amount="92,312.20"
          orders="13"
          heading="Amount Pending"
          showOrders
        />
        <DashboardCard
          amount="23,92,312.9"
          orders="23"
          heading="Amount Processed"
        />
      </div>
      <div className="py-4">
        <h1 className="tex-lg font-medium">Transactions | This Month</h1>
        <ToggleButtons />
        <DataTable />
      </div>
    </div>
  );
}
