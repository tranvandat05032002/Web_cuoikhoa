import React from "react";
import { IMAGE_EXPERIMENT } from "../../constants/const";
import { CampAuth, CampCategory, CampDesc, CampMeta, CampTitle } from "./parts";
const CampaignItem = () => {
  return (
    <div>
      <div className="h-[158px]">
        <img
          src={IMAGE_EXPERIMENT}
          alt=""
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
      <div className="px-5 py-4">
        <CampCategory></CampCategory>
        <CampTitle>Powered Kits Learning Boxes</CampTitle>
        <CampDesc>
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDesc>
        <div className="flex items-start justify-between gap-x-5 mb-[20px]">
          <CampMeta size="small"></CampMeta>
          <CampMeta size="small"></CampMeta>
        </div>
        <CampAuth></CampAuth>
      </div>
    </div>
  );
};

export default CampaignItem;
