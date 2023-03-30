import React from "react";
import Button from "../../components/button/Button";
import { IMAGE_EXPERIMENT } from "../../constants/const";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import CampaignPerk from "./CampaignPerk";
import {
  CampCategory,
  CampDesc,
  CampImage,
  CampMeta,
  CampTitle,
  CampSupport,
} from "./parts";
import CampViewAuth from "./parts/CampViewAuth";
import { v4 as uuidV4 } from "uuid";
const CampaignView = () => {
  return (
    <React.Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat mb-10 bg-center bg-opacity-20 text-[40px] font-bold flex items-center background-linear justify-center text-white"
    >
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          {" "}
          <CampImage
            className="h-[398px] flex-1 mb-[30px]"
            image={IMAGE_EXPERIMENT}
          ></CampImage>
          <div className="flex items-center justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item) => (
                <img
                  srcSet={IMAGE_EXPERIMENT}
                  key={uuidV4()}
                  alt=""
                  className="h-[70px] w-[89px] rounded-[5px] object-cover"
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampCategory text="Architecture" className="text-sm"></CampCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuth
            className="w-5 h-5 text-yellow-500"
            width
          ></CampViewAuth>
          <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6">
            <div className="w-2/4 h-full rounded-full bg-primary"></div>
          </div>
          <div className="flex items-start justify-between gap-x-5">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button kind="primary" className="w-full">
            Back this project
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
        <div className="flex items-center text-sm font-medium gap-x-14 text-text3">
          <span className="cursor-pointer text-secondary">Campaign</span>
        </div>
        <Button kind="primary" className="px-[35px]">
          Back this project
        </Button>
      </div>

      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div>
          <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
          <div className="w-full bg-white"></div>
        </div>
        <div>
          <CampSupport></CampSupport>
          <div className="mb-[60px]"></div>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>

      <h2 className="mb-10 text-xl font-semibold">
        You also may be interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </React.Fragment>
  );
};

export default CampaignView;
