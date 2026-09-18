import { useEffect, useState } from "react";

const EffectMistakes = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");

  const doubledCount = count * 2;

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const handleClear = (): void => {
    setCount(0);
    setName("");
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Common Effect Mistakes</h2>

      <p className="mt-4 text-slate-300">Count: {count}</p>

      <p className="mt-2 text-slate-300">Doubled: {doubledCount}</p>

      <button
        type="button"
        onClick={() => setCount((current) => current + 1)}
        className="mt-4 rounded bg-blue-600 px-4 py-2"
      >
        Increase
      </button>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
        placeholder="Enter your name"
        className="mt-6 w-full rounded bg-slate-800 p-3"
      />

      <button
        type="button"
        onClick={handleClear}
        className="mt-4 rounded bg-slate-700 px-4 py-2"
      >
        Clear
      </button>
    </section>
  );
};

export default EffectMistakes;
