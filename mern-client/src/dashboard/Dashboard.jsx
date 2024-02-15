import React, { PureComponent } from "react";
import { FaRegCalendarMinus, FaEllipsisVertical } from "react-icons/fa6";
import { Progress } from "antd";
import err from '../assets/nodata.jpg'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import PiComponent from "./PiComponent";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <div className="pt-7 px-2 w-full ">
      <div className="flex items-center justify-between">
        <h1 className=" text-2xl leading-8 font-bold cursor-pointer ">
          Dashboard
        </h1>
        <button className="bg-[#2E59d9] font-semibold h-8 rounded text-white flex items-center justify-center px-3 cursor-pointer">
          Generate Report
        </button>
      </div>
      <div className="grid grid-cols-4 gap-7 mt-6 pb-4 ">
        <div className="h-24 rounded-lg bg-white border-l-4 border-[#4e73df] flex items-center justify-between px-6 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition-all duration-200 ease-out">
          <div>
            <h2 className="text-[#B589DF] text-[11px] leading-4 font-bold">
              EARNING MONTHLY
            </h2>
            <h1 className=" text-xl font-bold text-[#5a5b69] mt-1">$25,000</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
        <div className="h-24 rounded-lg bg-white border-l-4 border-[#4e73df] flex items-center justify-between px-8 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition-all duration-200 ease-out">
          <div>
            <h2 className="text-[#1CC88A] text-[11px] leading-4 font-bold">
              EARNING ANNUALY
            </h2>

            <h1 className=" text-xl font-bold text-[#5a5b69] mt-1">
              $2,50,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
        <div className="h-24 rounded-lg bg-white border-l-4 border-[#4e73df] flex items-center justify-between px-8 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition-all duration-200 ease-out">
          <div>
            <h2 className="text-[#1CC88A] text-[11px] leading-4 font-bold">
              TASKS
            </h2>

            <h1 className=" text-xl font-bold text-[#5a5b69] mt-1">
              $1,40,000
            </h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
        <div className="h-24 rounded-lg bg-white border-l-4 border-[#4e73df] flex items-center justify-between px-8 cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition-all duration-200 ease-out">
          <div>
            <h2 className="text-[#1CC88A] text-[11px] leading-4 font-bold">
              PENDING REQUESTS
            </h2>

            <h1 className=" text-xl font-bold text-[#5a5b69] mt-1">$40,000</h1>
          </div>
          <FaRegCalendarMinus fontSize={28} color="" />
        </div>
      </div>

      <div className="flex mt-6 flex-wrap gap-6 ">
        <div className="basis-[60%] border shadow-md cursor-pointer rounded">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-4 px-5 border-b-2 border-[#EDEDED] mb-5">
            <h2>Earnings Overview</h2>
            <FaEllipsisVertical color="gray" className="cursor-pointer" />
          </div>
          <div>
            <LineChart
              width={1000}
              height={450}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </div>
        </div>
        <div className="basis-[30%]   border bg-white shadow-md cursor-pointer rounded ">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-4 px-5 border-b-2 border-[#EDEDED] mb-5">
            <h2>Revenue Resource</h2>
            <FaEllipsisVertical color="gray" className="cursor-pointer" />
          </div>
          <div className="px-4">
            <PiComponent />
          </div>
        </div>
      </div>

      <div className="flex  mt-5  gap-6 ">
        <div className="basis-[50%] border bg-white shadow-md cursor-pointer  rounded">
          <div className="bg-[#F8F9FC] flex items-center justify-between py-4 px-5 border-b-2 border-[#EDEDED] mb-5">
            <h2 className="text-[#4e7edf] text-lg font-bold">
              Project Overview
            </h2>
            <FaEllipsisVertical color="gray" className="cursor-pointer" />
          </div>
          <div className="px-6 space-y-4 py-4">
            <div>
              <h2>Sales Tracking</h2>
              <Progress percent={30} strokeColor="#E74A3B" />
            </div>
            <div>
              <h2>Online Reading</h2>
              <Progress percent={40} strokeColor="#F6C23E" status="active" />
            </div>
            <div>
              <h2>Customer Database</h2>
              <Progress percent={70} status="active" strokeColor="#4E73DF" />
            </div>
            <div>
              <h2>Payout details</h2>
              <Progress percent={95} status="active" strokeColor="#36B9CC" />
            </div>
            <div>
              <h2>Acount Setup</h2>
              <Progress percent={60} status="exception" strokeColor="#1CC88A" />
            </div>
          </div>
        </div>
        <div className="basis-[40%] border  bg-white shadow-md cursor-pointer  rounded">
          <div className="bg-[#F8F9FC] flex item-center justify-center py-4 px-5 border-b-2 border-[#EDEDED]">
            <h2 className="text-[#4e7edf] text-lg font-bold">Resources</h2>
            <FaEllipsisVertical color="gray" className="cursor-pointer" />
          </div>
          <div className="pl-9 flex items-center justify-center h-[100%]">
            <div>
              <img src={err} alt="" />
              <p className="my-4 mx-10 font-semibold text-gray-400">No Data Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
