import { useState } from "react";

type PlayerCardProps = {
  name: string;
};

function PlayerCard({ name }: PlayerCardProps) {
  const [score, setScore] = useState<number>(0);

  const increaseScore = (): void => {
    setScore((current) => current + 1);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">{name}</h2>

      <p className="mt-3 text-xl">Score: {score}</p>

      <button
        type="button"
        onClick={increaseScore}
        className="mt-5 rounded bg-blue-600 px-4 py-2"
      >
        Increase Score
      </button>
    </section>
  );
}

export default PlayerCard;
