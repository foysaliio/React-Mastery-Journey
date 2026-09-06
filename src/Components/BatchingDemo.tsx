import { useState } from "react";

const BatchingDemo = () => {
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>("Ready");

  const handleUpdate = (): void => {
    setCount((current) => current + 1);
    setCount((current) => current + 1);

    setMessage("Updated");
  };

  return (
    <section className="bg-slate-900 rounded-xl p-6 text-white">
      <h1 className="text-3xl font-bold">State Update Batching</h1>

      <div className="mt-6 space-y-2">
        <p>Count: {count}</p>
        <p>Message: {message}</p>
      </div>

      <button
        type="button"
        onClick={handleUpdate}
        className="mt-6 rounded bg-blue-600 px-4 py-2"
      >
        Update State
      </button>
    </section>
  );
};

export default BatchingDemo;
