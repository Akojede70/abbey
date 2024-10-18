import React, { ReactNode } from "react";
import SideBar from "../sidebar/sidebar";
import Header from "../header/header";
import { Logo } from "../../assets/images-icon";

interface LayoutProps {
  name?: string;
  children: ReactNode;
}

function Layout({ name = "Home", children }: LayoutProps) {
  return (

    <div>
    <div className="flex flex-col">
    {/* Header on Top */}
    <Header />
    </div>
    <div className="w-full">
    <div className="flex flex-grow">
      {/* Left Sidebar */}
      <SideBar />

      {/* Middle Content Area */}
      <div className="flex-grow w-1/2  pt-[1%] bg-[#B0C4DE]">
        <div className="w-full h-full">{children}</div>
      </div>

       <div className="w-1/3 bg-[#f7fafc] flex item-center justify-center py-[12%]">
       <img src={Logo} className="object-cover " alt="Big Display" />
       </div>
    </div>
    </div>
  </div>
  );
}

export default Layout;
