import { useState } from "react";

const ScoreCounter = () => {
  const [count, setCount] = useState<number>(0);

  const addOne = (): void => {
    setCount(count + 1);
  };

  const addFive = (): void => {
    setCount(count + 5);
  };

  const resetCount = (): void => {
    setCount(0);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h1 className="text-3xl font-bold">Score: {count}</h1>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={addOne}
          className="rounded bg-blue-600 px-4 py-2"
        >
          +1
        </button>

        <button
          type="button"
          onClick={addFive}
          className="rounded bg-emerald-600 px-4 py-2"
        >
          +5
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

export default ScoreCounter;
