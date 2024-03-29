import React, { useContext } from "react";
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
// import logoImg from "../assets/profile.jpg";
import { AuthContext } from "../contects/AuthProvider";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo img={user?.photoURL} imgAlt="">
        <Link to="/">{user?.displayName || "Demo User"}</Link>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item icon={HiChartPie}>
            <Link to="/admin/dashboard">Dashboard</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiOutlineCloudUpload}>
            <Link to="/admin/dashboard/upload">Upload Books</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiInbox}>
            <Link to="/admin/dashboard/manage">Manage Books</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item icon={HiArrowSmRight}>
            <Link to="/login">Sign In</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiTable}>
            <Link to="/Logout"> Log Out </Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
