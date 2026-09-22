import { useState } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue((current) => !current);
  }

  function turnOn() {
    setValue(true);
  }

  function turnOff() {
    setValue(false);
  }

  return {
    value,
    toggle,
    turnOn,
    turnOff,
  };
}
