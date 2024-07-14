import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-4 md:gap-12">
      <SideNavigation />
      <div className="py-6">{children}</div>
    </div>
  );
}
