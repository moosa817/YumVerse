import React from "react";
// import { FaAngleLeft } from "react-icons/fa6";
import { RiMenu2Fill } from "react-icons/ri";
import AvatarMenu from "./AvatarMenu";
import { Sidebar } from "..";

const Navbar = ({ state, heading, path }) => {
  const [sidebarConfig, setSidebarConfig] = state;

  const toggleMobileMenu = () => {
    setSidebarConfig((prev) => ({
      ...prev,
      toggle: !prev.toggle,
    }));
  };

  return (
    <main className="sticky top-0 bg-bgpurple p-3 h-[94px]">
      <section className="md:bg-white max-md:bg-darkpurple h-[70px] py-3 px-5 rounded-lg border border-grey shadow-[0_2px_6px_0_lightgrey] flex justify-between gap-5 items-center">
        <div className="flex items-center gap-3 max-md:hidden">
          {/* <button
                        className="bg-darkpurple p-2 rounded-full cursor-pointer transition duration-500"
                        onClick={() => router.visit(path)}
                    >
                        <FaAngleLeft className="text-base text-grey" />
                    </button> */}
          <button
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <RiMenu2Fill className="text-[28px]" />
          </button>{" "}
          <h1 className="!mb-0 truncate !text-darkpurple">{heading}</h1>
        </div>
        <RiMenu2Fill
          className="text-white text-[28px] cursor-pointer md:hidden"
          onClick={() => setSidebarConfig({ collapse: false, toggle: true })}
        />
        <h2 className="!mb-0 !text-white truncate md:hidden">{heading}</h2>
        <AvatarMenu />
      </section>
    </main>
  );
};

export default Navbar;
