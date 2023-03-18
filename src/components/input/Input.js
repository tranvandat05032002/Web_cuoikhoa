import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../common/ErrorComponent";

const Input = (props) => {
  const {
    className,
    type = "text",
    name,
    placeholder,
    control,
    errors = "",
    children,
    ...rest
  } = props;
  const { field } = useController({ name, control, defaultValue: "" });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        placeholder={errors.length > 0 ? "" : placeholder}
        className={`py-[15px] w-full focus:outline-none px-[25px] border font-medium bg-transparent rounded-[10px] text-text1 placeholder:text-text4 dark:placeholder:text-text2 placeholder:font-normal ${
          errors ? "border-error" : "border-strock dark:border-darkStroke dark:text-white"
        } ${children ? "pr-16" : ""}`}
        {...rest}
        {...field}
      />
      {errors.length > 0 && (
        <span className="text-error text-sm absolute top-2/4 -translate-y-2/4 left-[25px] pointer-events-none error-input">
          {errors}
        </span>
      )}
      {children && (
        <span className="absolute top-2/4 -translate-y-2/4 right-[25px] cursor-pointer select-none">
          {children}
        </span>
      )}
    </div>
  );
};
Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.string,
  control: PropTypes.any.isRequired,
  //   children: PropTypes.node,
};

export default withErrorBoundary(Input, {
  FallbackComponent: ErrorComponent,
});
