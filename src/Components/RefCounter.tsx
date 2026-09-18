import { useRef, useState } from "react";

function RefCounter() {
  const [count, setCount] = useState<number>(0);

  const clickCount = useRef<number>(0);

  const handleClick = (): void => {
    clickCount.current += 1;

    setCount((current) => current + 1);

    console.log("Button clicked:", clickCount.current);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">useRef Basics</h2>

      <p className="mt-4 text-slate-300">UI Count: {count}</p>

      <button
        type="button"
        onClick={handleClick}
        className="mt-4 rounded bg-blue-600 px-4 py-2"
      >
        Increase
      </button>
    </section>
  );
}

export default RefCounter;
