import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../components/icons";
import { IMAGE_EXPERIMENT } from "../../constants/const";
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
        <Link
          to={"/"}
          className="flex text-xs items-baseline gap-x-[10px] font-medium mb-[17px]"
        >
          <span className="text-icon-color">
            <IconFolder></IconFolder>
          </span>
          <span className="text-text3">Education</span>
        </Link>
        <h3 className="font-semibold text-text1 mb-[5px] text-base">
          Powered Kits Learning Boxes
        </h3>
        <p className="text-xs text-text3 leading-[18px] mb-[15px]">
          Fun, durable and reusable boxes with eco-friendly options.
        </p>
        <div className="flex items-start justify-between gap-x-5 mb-[20px]">
          <div className="gap-y-[3px] flex flex-col">
            <h4 className="text-sm font-semibold text-text2">$2,000</h4>
            <span className="text-xs text-text4">Raised of $1,900</span>
          </div>
          <div className="gap-y-[3px] flex flex-col">
            <h4 className="text-sm font-semibold text-text2">173</h4>
            <span className="text-xs text-text4">Total backers</span>
          </div>
        </div>
        <div className="flex items-center gap-x-[10px]">
          <img
            src={IMAGE_EXPERIMENT}
            alt="Mahfuzul Nabil"
            className="w-[30px] h-[30px] rounded-full object-cover"
          />
          <p className="text-xs text-text3">
            by <span className="font-semibold text-text2">Mahfuzul Nabil</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaignItem;
