import { useState, type ReactNode } from "react";

type HeadlessToggleProps = {
  defaultValue?: boolean;

  children: (props: { value: boolean; toggle: () => void }) => ReactNode;
};

export default function HeadlessToggle({
  defaultValue = false,
  children,
}: HeadlessToggleProps) {
  const [value, setValue] = useState(defaultValue);

  function toggle() {
    setValue((current) => !current);
  }

  return children({
    value,
    toggle,
  });
}
