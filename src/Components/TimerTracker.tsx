import { useRef, useState } from "react";

const TimerTracker = () => {
  const [seconds, setSeconds] = useState<number>(0);

  const intervalRef = useRef<number | null>(null);

  const startTimer = (): void => {
    if (intervalRef.current !== null) {
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setSeconds((current) => current + 1);
    }, 1000);
  };

  const stopTimer = (): void => {
    if (intervalRef.current === null) {
      return;
    }
    window.clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = (): void => {
    stopTimer();
    setSeconds(0);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Mutable Values with Refs</h2>

      <p className="mt-4 text-3xl font-bold">{seconds}s</p>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={startTimer}
          className="rounded bg-blue-600 px-4 py-2"
        >
          Start
        </button>

        <button
          type="button"
          onClick={stopTimer}
          className="rounded bg-slate-700 px-4 py-2"
        >
          Stop
        </button>

        <button
          type="button"
          onClick={resetTimer}
          className="rounded bg-red-600 px-4 py-2"
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default TimerTracker;
