import React from "react";
import { useController } from "react-hook-form";

const Textarea = ({ name, placeholder = "", control, children, ...rest }) => {
  const { field } = useController({ name, control, defaultValue: "" });
  return (
    <textarea
      className="py-[15px] w-full resize-none min-h-[140px] focus:outline-none px-[25px] border font-medium bg-transparent rounded-[10px] placeholder:text-text4 dark:placeholder:text-text2 placeholder:font-normal outline-none border-strock text-text1 dark:border-darkStroke dark:text-white"
      {...field}
      {...rest}
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
