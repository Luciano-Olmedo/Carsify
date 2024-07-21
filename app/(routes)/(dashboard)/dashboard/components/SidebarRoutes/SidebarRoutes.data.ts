import {  BookText, Calendar, Car, ClipboardPenLine, Heart } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Cars",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Cars Reserves",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Loved Cars",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: ClipboardPenLine,
    label: "Manage Your Cars",
    href: "/manage",
  },
  {
    icon: BookText,
    label: "All Reserves",
    href: "/allreserves",
  },
];
