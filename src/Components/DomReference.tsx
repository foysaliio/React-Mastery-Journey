import { useRef } from "react";

const DomReference = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const showInputElement = (): void => {
    console.log(inputRef.current);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">DOM Reference</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Write something"
        className="mt-5 w-full rounded bg-slate-800 p-3"
      />

      <button
        type="button"
        onClick={showInputElement}
        className="mt-4 rounded bg-blue-600 px-4 py-2"
      >
        Show DOM Element
      </button>
    </section>
  );
};

export default DomReference;
