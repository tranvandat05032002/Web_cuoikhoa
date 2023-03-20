import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "../../../components/icons";

const CampCategory = ({ text = "Education" }) => {
  return (
    <Link
      to={"/"}
      className="flex text-xs items-baseline gap-x-[10px] font-medium mb-[17px]"
    >
      <span className="text-icon-color">
        <IconFolder></IconFolder>
      </span>
      <span className="text-text3">{text}</span>
    </Link>
  );
};

export default CampCategory;
