import type { Ref } from "react";

interface CustomInputProps {
  label: string;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
}

const CustomInput = ({ label, placeholder, ref }: CustomInputProps) => {
  return (
    <label className="block">
      <span className="text-sm text-slate-300">{label}</span>

      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className="mt-2 w-full rounded bg-slate-800 p-3 text-white"
      />
    </label>
  );
};

export default CustomInput;
