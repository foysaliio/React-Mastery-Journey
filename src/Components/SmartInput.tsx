import { useImperativeHandle, useRef, type Ref } from "react";

export type SmartInputHandle = {
  focus: () => void;
  clear: () => void;
};

type SmartInputProps = {
  placeholder?: string;
  ref?: Ref<SmartInputHandle>;
};

function SmartInput({ placeholder, ref }: SmartInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      focus() {
        inputRef.current?.focus();
      },

      clear() {
        if (inputRef.current) {
          inputRef.current.value = "";
        }
      },
    }),
    [],
  );

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      className="w-full rounded bg-slate-800 p-3 text-white"
    />
  );
}

export default SmartInput;
