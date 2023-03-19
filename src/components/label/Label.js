import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Label = (props) => {
  const { htmlFor, className = "", children } = props;
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(
        "text-[14px] text-text2 dark:text-text3 font-medium inline-block mb-[10px] cursor-pointer",
        className
      )}
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
