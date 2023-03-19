import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import {
  IconDashboard,
  IconCampaign,
  IconLogout,
  IconWithdraw,
  IconPayment,
  IconProfile,
  IconLightDark,
} from "../../components/icons";
const sidebarLinks = [
  {
    icon: <IconDashboard></IconDashboard>,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: <IconCampaign></IconCampaign>,
    title: "Campaign",
    url: "/campaign",
  },
  {
    icon: <IconPayment></IconPayment>,
    title: "Payment",
    url: "/payment",
  },
  {
    icon: <IconWithdraw></IconWithdraw>,
    title: "Withdraw",
    url: "/withdraw",
  },
  {
    icon: <IconProfile></IconProfile>,
    title: "Profile",
    url: "/profile",
  },
  {
    icon: <IconLogout></IconLogout>,
    title: "Logout",
    url: "/sign-in",
  },
  {
    icon: <IconLightDark></IconLightDark>,
    title: "<Light />Dark",
    url: "#",
  },
];
const DashboardSidebar = () => {
  return (
    <div className="w-full md:w-[76px] px-[14px] flex flex-col rounded-[20px] py-10 bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)]">
      {sidebarLinks.map((link) => (
        <NavLink
          key={uuidV4()}
          to={link.url}
          className={({ isActive }) =>
            isActive
              ? "bg-extraPrimary text-primary [&>span]:text-primary flex p-[12px] mb-[30px] cursor-pointer items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg last:bg-white last:mt-auto last:shadow-sdPrimary"
              : "flex p-[12px] mb-[30px] cursor-pointer items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg last:bg-white last:mt-auto last:shadow-sdPrimary"
          }
        >
          <span className="text-icon-color">{link.icon}</span>
          <span className="md:hidden"> {link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashboardSidebar;
