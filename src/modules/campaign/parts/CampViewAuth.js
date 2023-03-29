import React from "react";
import { IMAGE_EXPERIMENT } from "../../../constants/const";
import { IconStar } from "../../../components/icons";
import { v4 as uuidV4 } from "uuid";
const CampViewAuth = ({ className = "" }) => {
  return (
    <div className="flex items-center gap-x-5 mb-9">
      <img
        src={IMAGE_EXPERIMENT}
        alt=""
        className="object-cover rounded-full w-[60px] h-[60px]"
      />
      <div className="flex flex-col flex-1">
        <div className="flex items-center gap-x-4">
          <h3 className="text-lg font-medium">Saiful Islam</h3>
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((item) => (
                <IconStar key={uuidV4()} className={className}></IconStar>
              ))}
          </div>
        </div>
        <div className="flex items-center text-sm gap-x-3 text-text3">
          <strong className="text-primary">02 Campaign</strong>
          <span className="block w-[6px] h-[6px] rounded-full bg-text3"></span>
          <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default CampViewAuth;
