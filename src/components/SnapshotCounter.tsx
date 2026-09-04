import { useState } from "react";

const SnapshotCounter = () => {
  const [count, setCount] = useState<number>(0);

  const increaseCount = (): void => {
    console.log(`Before: ${count}`);

    setCount(count + 1);

    console.log(`After setCount: ${count}`);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h1 className="text-3xl font-bold">Count: {count}</h1>

      <button
        type="button"
        onClick={increaseCount}
        className="mt-5 rounded-lg bg-blue-600 px-5 py-2"
      >
        Increase
      </button>
    </section>
  );
};

export default SnapshotCounter;
