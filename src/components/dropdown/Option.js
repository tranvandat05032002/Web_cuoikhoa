import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = (props) => {
  const { setShow } = useDropdown();
  const { onClick } = props;
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="relative flex items-center justify-between z-[2] px-5 py-4 bg-white cursor-pointer hover:text-primary"
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Option;
