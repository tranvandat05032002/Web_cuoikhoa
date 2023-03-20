import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Button = ({
  children,
  type = "button",
  className = "",
  isLoading = false,
  ...rest
}) => {
  const child = !!isLoading ? (
    <div className="w-[30px] h-[30px] rounded-full border-t-transparent border-b-transparent animate-spin border-[4px] border-white"></div>
  ) : (
    children
  );
  return (
    <button
      className={classNames(
        "text-base text-white rounded-[10px] font-semibold mt-[15px] lg:mt-[10px] py-[13px] min-h-[56px] flex justify-center items-center",
        isLoading ? "opacity-50" : "",
        className
      )}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};
export default Button;
