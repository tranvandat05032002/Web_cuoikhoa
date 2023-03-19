import React from "react";
import { IconDown, IconUpTrending } from "../../components/icons";

const DashboardFund = () => {
  return (
    <div className="flex items-center text-base font-medium cursor-pointer text-text2 gap-x-2">
      <IconUpTrending className="text-icon-color"></IconUpTrending>
      <span>Fundrising for</span>
      <IconDown className="text-icon-color"></IconDown>
    </div>
  );
};

export default DashboardFund;
