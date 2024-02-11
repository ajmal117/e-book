import React from "react";
import { FaRegCalendarMinus } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div className="pt-7 lg:px-[24px] w-full">
      <div className="flex items-center justify-between">
        <h1 className=" text-2xl leading-8 font-bold cursor-pointer ">
          Dashboard
        </h1>
        <button className="bg-[#2E59d9] font-semibold h-8 rounded text-white flex items-center justify-center px-3 cursor-pointer">
          Generate Report
        </button>
      </div>
      <div className="grid grid-cols-4 gap-7 mt-6 pb-4 ">
        <div className="h-24 rounded-lg bg-white border-l-4 border-[#4e73df]">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-4 font-bold">
              EARNING MONTHLY
            </h2>

            <h1 className=" text-xl font-bold text-[#5a5b69] mt-1">$25,000</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
