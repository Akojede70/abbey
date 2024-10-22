import React, { ReactNode } from "react";
import SideBar from "../sidebar/sidebar";
import Header from "../header/header";
import { Logo } from "../../assets/images-icon";

interface LayoutProps {
  name?: string;
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (

<div className="h-full relative">
  <div>
  <div className="absolute top-0 left-0 right-0 z-10 ">
    <Header />
  </div>
  </div>
  <div className="flex flex-grow">
    <div className="w-[28%]  xl:w-1/5">
    <SideBar />
    </div>

    <div className="flex-grow   sm:w-1/2  pt-12 bg-[#B0C4DE] overflow-y-auto h-screen scrollbar">
       <div className="w-full h-full">{children}</div>
    </div>

    <div className=" hidden w-1/3 bg-[#f7fafc] lg:flex item-center justify-center py-[12%]">
      <img src={Logo} className="object-cover" alt="Big Display" />
      </div>
  </div>

</div>
  );
}

export default Layout;
