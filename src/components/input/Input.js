import React from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";

const Input = (props) => {
  const {
    className,
    type = "text",
    name,
    placeholder,
    control,
    // children,
    ...rest
  } = props;
  const { field } = useController({ name, control, defaultValue: "" });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        className="py-[15px] w-full focus:outline-none px-[25px] border border-strock font-medium bg-transparent rounded-[10px] text-text1 placeholder:text-text4"
        {...rest}
        {...field}
      />
    </div>
  );
};
Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  control: PropTypes.any.isRequired,
  //   children: PropTypes.node,
};

export default Input;
