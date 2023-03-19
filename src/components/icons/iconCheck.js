import React from "react";
import classNames from "../../utils/classNames";

const IconCheck = ({ className = "", width = "w-6", height = "h-6" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.8"
      stroke="currentColor"
      className = {classNames(className, width, height)}      
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
};

export default IconCheck;
