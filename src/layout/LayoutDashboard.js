import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../components/common/ErrorComponent";
import DashboardTopBar from "../modules/dashboard/DashboardTopBar";
import DashboardSidebar from "../modules/dashboard/DashboardSidebar";
import Overlay from "../components/common/Overlay";
import { Outlet } from "react-router-dom";
import ReactModal from "react-modal";
import { IconClose } from "../components/icons";
import { Button } from "../components";
import CampaignPerk from "../modules/campaign/CampaignPerk";
import Gap40 from "../components/common/Gap40";

const LayoutDashboard = () => {
  return (
    <div className="p-10 bg-lite dark:bg-darkbg ">
      <ReactModal
        isOpen={false}
        overlayClassName="modal-overlay fixed inset-0 bg-black max bg-opacity-40 z-50 flex items-center justify-center"
        className="modal-content scroll-hidden w-full max-h-[90vh] overflow-y-auto max-w-[521px] bg-white rounded-[20px] outline-none px-10 py-[10px] relative"
      >
        <button className="absolute z-10 cursor-pointer w-11 h-11 right-10 top-[10px] flex items-center justify-center text-text1">
          <IconClose></IconClose>
        </button>
        <h2 className="text-text1 font-bold text-[25px] mb-10 text-center mt-11">
          Back this project
        </h2>
        <p className="my-[10px] text-text2 text-sm font-medium">
          Enter the contribute amount
        </p>
        <input
          placeholder="$10"
          name="amount"
          className="w-full px-5 py-3 mb-5 text-lg font-medium border rounded border-strock"
        ></input>
        <p className="my-5 font-normal text-text3">
          Contribution are not associaltied with perks
        </p>
        <Button kind="primary" className=" px-[44px]">
          Continue
        </Button>
        <div className="mb-[60px]"></div>
        <CampaignPerk showButton={true}></CampaignPerk>
        <Gap40></Gap40>
        <CampaignPerk showButton={true}></CampaignPerk>
      </ReactModal>
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
export default withErrorBoundary(LayoutDashboard, {
  FallbackComponent: ErrorComponent,
});
