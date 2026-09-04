import { useState } from "react";

interface CounterCardProps {
  title: string;
}

const CounterCard = ({ title }: CounterCardProps) => {
  const [count, setCount] = useState<number>(0);

  const increaseCount = (): void => {
    setCount(count + 1);
  };

  return (
    <article className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-xl font-semibold"> {title} </h2>

      <p className="mt-3 text-3xl font-bold">{count}</p>

      <button
        type="button"
        className="mt-5 rounded-lg bg-blue-600 px-4 py-2"
        onClick={increaseCount}
      >
        Increase
      </button>
    </article>
  );
};

export default CounterCard;
