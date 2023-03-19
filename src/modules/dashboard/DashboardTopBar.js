import React from "react";
import Button from "../../components/button/Button";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopBar = () => {
  return (
    <div className="flex items-center justify-between mb-[30px]">
      <div className="flex items-center flex-1 gap-x-10">
        <img srcSet="/logo.png 2x" alt="crowfunding-app" />
        <div className="max-w-[458px] w-full">
          <DashboardSearch></DashboardSearch>
        </div>
      </div>
      <div className="flex items-center justify-end flex-1 gap-x-10">
        <DashboardFund></DashboardFund>
        <Button className="bg-secondary px-7">Start a campaign</Button>
        <img
          srcSet="/logo.png 2x"
          alt="crowfunding-app"
          className="object-cover rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default DashboardTopBar;
