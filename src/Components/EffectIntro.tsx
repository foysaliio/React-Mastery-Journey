import { useEffect, useState } from "react";

const EffectIntro = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Effect Introduction</h2>

      <p className="mt-4 text-slate-300">Count: {count}</p>

      <button
        type="button"
        onClick={() => setCount((current) => current + 1)}
        className="mt-4 rounded bg-blue-600 px-4 py-2"
      >
        Increase
      </button>
    </section>
  );
};

export default EffectIntro;
