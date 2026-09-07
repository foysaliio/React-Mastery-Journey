import { useState } from "react";

const ScoreBoard = () => {
  const [score, setScore] = useState<number>(0);
  const [showMessage, setShowMessage] = useState<boolean>(true);

  const increaseScore = (): void => {
    setScore((current) => current + 1);
  };

  const toggleMessage = (): void => {
    // setShowMessage(!showMessage);
    setShowMessage((currentMessage) => !currentMessage);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Score: {score}</h2>

      {showMessage && (
        <p className="mt-3 text-slate-400">Keep practicing React.</p>
      )}

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={increaseScore}
          className="rounded bg-blue-600 px-4 py-2"
        >
          Increase Score
        </button>

        <button
          type="button"
          onClick={toggleMessage}
          className="rounded bg-slate-700 px-4 py-2"
        >
          Toggle Message
        </button>
      </div>
    </section>
  );
};

export default ScoreBoard;
