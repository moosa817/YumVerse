import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { AiOutlineLogout } from "react-icons/ai";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlinePassword } from "react-icons/md";
import { Avatar } from "../../components/core";
import { user, utils } from "../../utils";

const AvatarMenu = () => {
  const toggleMenu = useRef(null);
  const userData = user.get();
  let nameCode = "";

  if (userData) {
    nameCode = utils.nameToCode(userData.name);
  }

  const items = [
    // {
    //     label: "Profile",
    //     icon: <FaRegUser className="text-[17px] mr-2" />,
    //     command: () => router.visit("/settings/profile"),
    // },
    // {
    //     label: "Change Password",
    //     icon: <MdOutlinePassword className="text-lg mr-2" />,
    //     command: () => router.visit("/settings/change-password"),
    // },
    {
      label: "Logout",
      icon: <AiOutlineLogout className="transform rotate-180 text-lg mr-2" />,
      command: user.logout,
    },
  ];

  return (
    <section
      className="flex items-center gap-2 cursor-pointer"
      onClick={(event) => toggleMenu.current.toggle(event)}
    >
      <Menu popup model={items} ref={toggleMenu} />
      <Avatar label={nameCode} />

      <div className="font-medium text-right max-md:hidden">
        <h4 className="!mb-0 !text-black">{userData.name}</h4>
        <p className="text-sm text-gray-500">{userData.email}</p>
      </div>
    </section>
  );
};

export default AvatarMenu;
