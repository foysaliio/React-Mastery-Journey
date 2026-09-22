import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue((current) => !current);
  };

  const turnOn = () => {
    setValue(true);
  };

  const turnOff = () => {
    setValue(false);
  };

  return {
    value,
    toggle,
    turnOn,
    turnOff,
  };
};
