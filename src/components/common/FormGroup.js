import React from "react";

const FormGroup = (props) => {
  const { children } = props;
  return (
    <div className="mb-[15px] lg:mb-6 flex flex-col gap-y-2 lg:gap-y-3">
      {children}
    </div>
  );
};

export default FormGroup;
