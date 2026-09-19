import { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = (): void => {
    inputRef.current?.focus();
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Focusing Inputs</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
        className="mt-5 w-full rounded bg-slate-800 p-3"
      />

      <button
        type="button"
        onClick={focusInput}
        className="mt-4 rounded bg-blue-600 px-4 py-2"
      >
        Focus Input
      </button>
    </section>
  );
};

export default FocusInput;
