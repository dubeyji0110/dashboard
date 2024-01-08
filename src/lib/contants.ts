import {
  Home,
  GanttChartSquare,
  LayoutDashboard,
  Truck,
  Banknote,
  Percent,
  UsersRound,
  Palette,
  PlugZap,
} from "lucide-react";
import * as Icons from "@/components/imports/Icons";

export const routes = [
  {
    name: "Home",
    Icon: Home,
  },
  {
    name: "Orders",
    Icon: GanttChartSquare,
  },
  {
    name: "Products",
    Icon: LayoutDashboard,
  },
  {
    name: "Delivery",
    Icon: Truck,
  },
  {
    name: "Marketing",
    Icon: Icons.Marketing,
  },
  {
    name: "Analytics",
    Icon: Icons.Analytics,
  },
  {
    name: "Payouts",
    Icon: Banknote,
  },
  {
    name: "Discounts",
    Icon: Percent,
  },
  {
    name: "Audience",
    Icon: UsersRound,
  },
  {
    name: "Appearence",
    Icon: Palette,
  },
  {
    name: "Plugins",
    Icon: PlugZap,
  },
];

export const invoices = [
  {
    orderId: "12323",
    status: "Successful",
    transactionId: "3434242455",
    refundDate: "Today, 08:45PM",
    orderAmount: "1,123",
  },
  {
    orderId: "12323",
    status: "Pending",
    transactionId: "3434242455",
    refundDate: "Today, 08:45PM",
    orderAmount: "1,123",
  },
  {
    orderId: "12323",
    status: "Successful",
    transactionId: "3434242455",
    refundDate: "Today, 08:45PM",
    orderAmount: "1,123",
  },
  {
    orderId: "12323",
    status: "Successful",
    transactionId: "3434242455",
    refundDate: "Yesterday, 02:15PM",
    orderAmount: "1,123",
  },
  {
    orderId: "12323",
    status: "Successful",
    transactionId: "3434242455",
    refundDate: "12 Jul 2023, 03:00PM",
    orderAmount: "1,123",
  },
  {
    orderId: "12323",
    status: "Successful",
    transactionId: "3434242455",
    refundDate: "12 Jul 2023, 03:00PM",
    orderAmount: "1,123",
  },
];
