import { useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState<number>(0);

  const increaseByThree = (): void => {
    setCount((current) => current + 1);
    setCount((current) => current + 1);
    setCount((current) => current + 1);
  };

  const resetCount = (): void => {
    setCount(0);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h1 className="text-3xl font-bold">Count: {count}</h1>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={increaseByThree}
          className="rounded bg-blue-600 px-4 py-2"
        >
          Increase +3
        </button>

        <button
          type="button"
          onClick={resetCount}
          className="rounded bg-slate-600 px-4 py-2"
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default FunctionalCounter;
