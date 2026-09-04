import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increaseCount = (): void => {
    setCount(count + 1);
  };

  const decreaseCount = (): void => {
    setCount(count - 1);
  };

  const resetCount = (): void => {
    setCount(0);
  };
  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>

      <div className="mt-6 flex gap-3">
        <button
          onClick={decreaseCount}
          className="rounded-lg bg-red-600 px-4 py-2"
        >
          Decrease
        </button>

        <button
          onClick={resetCount}
          className="rounded-lg bg-slate-600 px-4 py-2"
        >
          Reset
        </button>

        <button
          onClick={increaseCount}
          className="rounded-lg bg-green-600 px-4 py-2"
        >
          Increase
        </button>
      </div>
    </section>
  );
};

export default Counter;
