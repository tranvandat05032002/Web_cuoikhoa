import React from "react";
import PropTypes from "prop-types";

const Label = (props) => {
  const { htmlFor, className, children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={`text-[14px] text-text2 font-medium inline-block mb-[10px] cursor-pointer ${className}`}
    >
      {children}
    </label>
  );
};
Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  children: PropTypes.node,
};
export default Label;
