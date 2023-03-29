import React from "react";
import Button from "../../components/button/Button";
import { IMAGE_EXPERIMENT } from "../../constants/const";
import {
  CampCategory,
  CampDesc,
  CampImage,
  CampMeta,
  CampTitle,
} from "./parts";
import CampViewAuth from "./parts/CampViewAuth";

const CampaignView = () => {
  return (
    <React.Fragment>
      <div
        className="h-[140px] rounded-3xl bg-cover bg-no-repeat mb-10 bg-center bg-opacity-20 text-[40px] font-bold flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(179.14deg, rgba(32, 18, 63, 0) -7.14%, #000000 87.01%), url(${IMAGE_EXPERIMENT})`,
        }}
      >
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          {" "}
          <CampImage className="h-[398px] flex-1 mb-[30px]"></CampImage>
          <div className="flex items-center justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item) => (
                <img
                  srcSet={IMAGE_EXPERIMENT}
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
    </React.Fragment>
  );
};

export default CampaignView;
