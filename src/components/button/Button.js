import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import { Link } from "react-router-dom";

const Button = ({
  children,
  type = "button",
  className = "",
  isLoading = false,
  ...rest
}) => {
  /**
   * @param {string} kind - pass a type kind = {primary, secondary, ghostPrimary, ghostSecondary}
   * @param {node} children - pass a element
   * @param {string} type - pass a type of button
   * @param {boolean} isLoading - status of button no required
   * @returns Button
   */
  const child = !!isLoading ? (
    <div className="w-[30px] h-[30px] rounded-full border-t-transparent border-b-transparent animate-spin border-[4px] border-white"></div>
  ) : (
    children
  );
  let defaultClassName =
    "text-base rounded-[10px] font-semibold mt-[15px] lg:mt-[10px] py-[13px] min-h-[56px] flex justify-center items-center";
  switch (rest.kind) {
    case "primary":
      defaultClassName += " bg-primary text-white";
      break;
    case "secondary":
      defaultClassName += " bg-secondary text-white";
      break;
    case "ghostSecondary":
      defaultClassName += " bg-secondary bg-opacity-10 text-secondary";
      break;
    case "ghostPrimary":
      defaultClassName += " bg-primary text-white bg-opacity-10 text-secondary";
      break;
    default:
      break;
  }
  if (rest.href) {
    return (
      <Link to={rest.href} className={classNames(defaultClassName, className)}>
        {child}
      </Link>
    );
  }
  return (
    <button
      className={classNames(
        defaultClassName,
        !!isLoading ? "opacity-50 pointer-events-none" : "",
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
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  kind: PropTypes.oneOf([
    "primary",
    "secondary",
    "ghostPrimary",
    "ghostSecondary",
  ]),
  href: PropTypes.string,
};
export default Button;
