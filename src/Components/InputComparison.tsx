import { useRef, useState } from "react";

function InputComparison() {
  const [controlledName, setControlledName] = useState<string>("");

  const uncontrolledRef = useRef<HTMLInputElement>(null);

  const showUncontrolledValue = (): void => {
    const value = uncontrolledRef.current?.value;

    console.log("Uncontrolled value:", value);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Controlled vs Uncontrolled</h2>

      <div className="mt-6 space-y-6">
        <div>
          <h3 className="font-semibold">Controlled Input</h3>

          <input
            type="text"
            value={controlledName}
            onChange={(event) => setControlledName(event.currentTarget.value)}
            placeholder="Controlled input"
            className="mt-2 w-full rounded bg-slate-800 p-3"
          />

          <p className="mt-2 text-slate-300">
            Value: {controlledName || "Empty"}
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Uncontrolled Input</h3>

          <input
            ref={uncontrolledRef}
            type="text"
            placeholder="Uncontrolled input"
            className="mt-2 w-full rounded bg-slate-800 p-3"
          />

          <button
            type="button"
            onClick={showUncontrolledValue}
            className="mt-3 rounded bg-blue-600 px-4 py-2"
          >
            Read Value
          </button>
        </div>
      </div>
    </section>
  );
}

export default InputComparison;
