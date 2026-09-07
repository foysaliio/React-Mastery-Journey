import { useState } from "react";

function ReconciliationDemo() {
  const [count, setCount] = useState<number>(0);

  const increaseCount = (): void => {
    setCount((current) => current + 1);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Reconciliation Demo</h2>

      <p className="mt-4 text-xl">Count: {count}</p>

      <button
        type="button"
        onClick={increaseCount}
        className="mt-5 rounded bg-blue-600 px-4 py-2"
      >
        Increase
      </button>
    </section>
  );
}

export default ReconciliationDemo;
