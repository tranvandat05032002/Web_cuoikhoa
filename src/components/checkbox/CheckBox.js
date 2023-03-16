import React from "react";
import IconCheck from "../icons/iconCheck";
import PropTypes from "prop-types"

const CheckBox = ({ name, onClick = () => {}, checked = false, children }) => {
  return (
    <div className="flex items-start gap-x-5">
      <div
        className={` inline-flex items-center justify-center w-5 h-5 border rounded cursor-pointer ${
          checked ? "bg-primary border-primary" : "border-text4"
        }`}
        onClick={onClick}
      >
        <input
          type="checkbox"
          onChange={() => {}}
          className="hidden"
          name={name}
        />
        <span className="">
          <IconCheck
            className="text-white"
            height="w-4"
            width="w-4"
          ></IconCheck>
        </span>
      </div>
      {children && <label onClick={onClick} className="font-medium text-text3">{children}</label>}
    </div>
  );
};
CheckBox.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
    checked: PropTypes.bool,
    children: PropTypes.node
}
export default CheckBox;
