import { useState, type ChangeEvent } from "react";

type UseInputReturn = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

export function useInput(initialValue = ""): UseInputReturn {
  const [value, setValue] = useState<string>(initialValue);

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function reset() {
    setValue("");
  }

  return {
    value,
    onChange,
    reset,
  };
}
