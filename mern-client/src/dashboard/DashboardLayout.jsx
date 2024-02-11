import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex gap-4 md:flex-row ">
      <div className="fixed top-0 h-full">
        <SideBar />
      </div>
      <div className="pl-64">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
