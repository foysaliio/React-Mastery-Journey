import { useId } from "react";

type AccessibleFieldProps = {
  label: string;
  hint: string;
  type?: "text" | "email" | "password";
};

function AccessibleField({ label, hint, type = "text" }: AccessibleFieldProps) {
  const id = useId();

  const inputId = `${id}-input`;
  const hintId = `${id}-hint`;

  return (
    <div>
      <label htmlFor={inputId} className="block font-medium text-white">
        {label}
      </label>

      <input
        id={inputId}
        type={type}
        aria-describedby={hintId}
        className="mt-2 w-full rounded bg-slate-800 p-3 text-white"
      />

      <p id={hintId} className="mt-2 text-sm text-slate-400">
        {hint}
      </p>
    </div>
  );
}

export default AccessibleField;
