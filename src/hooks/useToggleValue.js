import React from "react";

export default function useToggleValue(initialValue = false) {
  const [booleanValue, setBooleanValue] = React.useState(initialValue);
  const handleToggleValue = () => {
    setBooleanValue(!booleanValue);
  };
  return {
    handleToggleValue,
    booleanValue,
  };
}
