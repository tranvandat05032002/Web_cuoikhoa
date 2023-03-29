import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import DashboardTopBar from "../modules/dashboard/DashboardTopBar";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import Overlay from "../components/common/Overlay";
import { Outlet } from "react-router-dom";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="p-10 bg-lite dark:bg-darkbg">
      <Overlay></Overlay>
      <DashboardTopBar></DashboardTopBar>
      <div className="flex gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
LayoutDashboard.propTypes = {
  children: PropTypes.node,
};
export default withErrorBoundary(LayoutDashboard, {
  FallbackComponent: ErrorComponent,
});
