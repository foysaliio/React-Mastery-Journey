import { useEffect, useState } from "react";

const AutoMessage = () => {
  const [message, setMessage] = useState<string>("Waiting...");

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setMessage("Timer completed!");
    }, 3000);

    return () => {
      window.clearTimeout(timerId);
    };
  }, []);

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Timer Cleanup</h2>

      <p className="mt-4 text-slate-300">{message}</p>
    </section>
  );
};

export default AutoMessage;
