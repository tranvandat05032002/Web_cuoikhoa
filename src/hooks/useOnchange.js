import { debounce } from "lodash";
import React from "react";

export default function useOnchange(time = 0) {
  const [value, setValue] = React.useState(null);
  const handleChange = debounce((e) => {
    setValue(e.target.value);
  }, time);
  return [value, handleChange];
}
