import { useRef, useState } from "react";

function RefVsState() {
  const [stateCount, setStateCount] = useState<number>(0);

  const refCount = useRef<number>(0);

  const increaseState = (): void => {
    setStateCount((current) => current + 1);
  };

  const increaseRef = (): void => {
    refCount.current += 1;

    console.log("Ref Count:", refCount.current);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Ref vs State</h2>

      <div className="mt-6 space-y-3">
        <p className="text-slate-300">State Count: {stateCount}</p>

        <p className="text-slate-300">Ref Count: {refCount.current}</p>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={increaseState}
          className="rounded bg-blue-600 px-4 py-2"
        >
          Increase State
        </button>

        <button
          type="button"
          onClick={increaseRef}
          className="rounded bg-slate-700 px-4 py-2"
        >
          Increase Ref
        </button>
      </div>
    </section>
  );
}

export default RefVsState;
