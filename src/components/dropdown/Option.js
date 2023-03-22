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
      className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-primary hover:bg-opacity-5 hover:text-primary"
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Option;
