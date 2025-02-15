import React, { useEffect, useState } from "react";
import { Navbar, Sidebar } from "../../layout";
import hardcodedMenu from "../../data/menu.json";

const AuthOutlet = ({ children }) => {
  const [sidebarConfig, setSidebarConfig] = useState({
    toggle: false,
    collapse: false,
    rtl: false,
  });
  const [heading, setHeading] = useState("");

  useEffect(() => {
    hardcodedMenu.map((ele) => {
      const { pathname, search } = window.location;
      const full_path = pathname + search;

      if (pathname === ele.route || full_path === ele.route) {
        setHeading(ele.name);
      }
    });
  }, []);

  return (
    <main className="flex">
      <Sidebar menu={hardcodedMenu} state={[sidebarConfig, setSidebarConfig]} />
      <section
        className="max-md:!w-full"
        style={{
          width: `calc(100% - ${!sidebarConfig.collapse ? "240px" : "60px"})`,
        }}
      >
        <Navbar state={[sidebarConfig, setSidebarConfig]} heading={heading} />
        <div
          className="pt-2 p-3 overflow-y-auto"
          style={{ height: `calc(100vh - 94px)` }}
        >
          {children}
        </div>
      </section>
    </main>
  );
};

export default AuthOutlet;
