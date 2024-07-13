import { Sidebar } from "./dashboard/components/Sidebar/Sidebar";


export default function LayoutDashBoard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full h-full">
      <div className="hidden h-full lg:block w-80 lg:fixed">
        <Sidebar/>
      </div>
      <div className="w-full h-full lg:ml-80">
        NavbarDashBoard
        <div className="p-6 h-max">{children}</div>
      </div>
    </div>
  );
}
