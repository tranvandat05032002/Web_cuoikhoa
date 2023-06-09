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
import { useDispatch } from "react-redux";
import { authLogOut } from "../../store/auth/auth-slice";
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
    url: "/logout",
  },
  {
    icon: <IconLightDark></IconLightDark>,
    title: "<Light />Dark",
    url: "/dark",
  },
];
const DashboardSidebar = () => {
  const navLinkClass =
    "flex p-[12px] mb-[30px] cursor-pointer items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg last:bg-white last:mt-auto last:shadow-sdPrimary";
  const dispatch = useDispatch();
  return (
    <div className="w-full md:w-[76px] px-[14px] flex flex-col rounded-[20px] py-10 bg-white shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] flex-shrink-0">
      {sidebarLinks.map((link) => {
        if (link.url === "/logout") {
          return (
            <button
              key={uuidV4()}
              onClick={() => {
                dispatch(authLogOut());
              }}
              className={navLinkClass + " text-icon-color"}
            >
              <span>{link.icon}</span>
              <span className="md:hidden"> {link.title}</span>
            </button>
          );
        } else {
          return (
            <NavLink
              key={uuidV4()}
              to={link.url}
              className={({ isActive }) =>
                isActive
                  ? `bg-extraPrimary text-primary ${navLinkClass}`
                  : `${navLinkClass} text-icon-color`
              }
            >
              <span>{link.icon}</span>
              <span className="md:hidden"> {link.title}</span>
            </NavLink>
          );
        }
      })}
    </div>
  );
};

export default DashboardSidebar;
