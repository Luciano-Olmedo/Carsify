import Link from "next/link";
import { SidebarItemProps } from "./Sidebaritem.type";
import { Icon } from "lucide-react";
import { cn } from "@/lib/utils";

export  function Sidebaritem(props : SidebarItemProps) {
  const {item} = props;
  const {href,label,icon:Icon} = item;

  return (
    <Link href={href}
    className={cn('flex gap-x-2 mt-2 text-slate-700 text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer')}

    >
      <Icon className="h-5 w-5" strokeWidth={1}></Icon>
      {label}
    </Link>
  )
}
