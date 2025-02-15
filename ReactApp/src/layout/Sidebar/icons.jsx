import { LuLayoutDashboard } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { PiCookingPot } from "react-icons/pi";

const sidebarIcons = [
  {
    iconName: "Dashboard",
    icon: <LuLayoutDashboard className="text-xl" />,
  },
  {
    iconName: "Recipes",
    icon: <PiCookingPot className="text-[22px]" />,
  },
  {
    iconName: "Settings",
    icon: <IoSettingsOutline className="text-[22.8px]" />,
  },
];

export const getIcon = (name) =>
  sidebarIcons.filter(({ iconName }) => name === iconName)[0]?.icon;
