import React, { useEffect, useState } from "react";
import { Sidebar as ReactProSidebar } from "react-pro-sidebar";
import SidebarMenu from "./SidebarMenu";
import { utils } from "../../utils";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/yumverse-logo.png";

const Sidebar = ({ state, menu = [] }) => {
  const [sidebarConfig, setSidebarConfig] = state;
  const navigate = useNavigate();

  if (!setSidebarConfig) {
    console.warn("setSidebarConfig is not properly passed to Sidebar");
    return null;
  }

  const handleCollapseClick = () => {
    if (window.innerWidth <= 768) {
      setSidebarConfig((prev) => ({
        ...prev,
        toggle: false,
        collapse: !prev.collapse,
      }));
    } else {
      setSidebarConfig((prev) => ({
        ...prev,
        collapse: !prev.collapse,
      }));
    }
  };

  return (
    <ReactProSidebar
      rootStyles={{
        height: "100vh",
        color: "#c9c8ce",
        transition: "all 0.3s",
        zIndex: 1000,
      }}
      width={sidebarConfig.toggle ? "270px" : "240px"}
      rtl={sidebarConfig.rtl}
      collapsed={sidebarConfig.collapse}
      collapsedWidth="60px"
      backgroundColor="#242745"
      className={sidebarConfig.toggle ? "max-md:!absolute" : "max-md:hidden"}
    >
      <section
        className={utils.cn(
          `flex justify-center cursor-pointer mb-8`,
          sidebarConfig.collapse ? "pl-[9px] mt-8" : "pl-4 mt-6"
        )}
        onClick={() => navigate("/")}
      >
        <img
          src={logo}
          className={utils.cn(
            `transition-all duration-1000`,
            !sidebarConfig.collapse ? "w-20 h-16" : "w-10 h-10"
          )}
          alt="Logo"
        />
      </section>
      {menu.length > 0 && <SidebarMenu state={state} menu={menu} />}
      <div className="flex justify-end [&>div>h5]:text-lightgrey [&>div>h5]:mb-0 mx-3.5">
        <button
          className={utils.cn(
            `bg-lightgrey p-2 rounded-full cursor-pointer transition duration-500`,
            sidebarConfig.collapse && "transform rotate-180"
          )}
          onClick={handleCollapseClick}
        >
          <FaAngleLeft className="text-base text-darkpurple" />
        </button>
      </div>
    </ReactProSidebar>
  );
};

export default Sidebar;
