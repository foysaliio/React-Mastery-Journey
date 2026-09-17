import { useEffect, useState } from "react";

const CleanupDemo = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <button
        type="button"
        onClick={() => {
          setIsVisible((current) => !current);
        }}
        className="rounded bg-blue-600 px-4 py-2"
      >
        {isVisible ? "Hide Timer" : "Show Timer"}
      </button>
      {isVisible && <Timer />}
    </section>
  );
};

const Timer = () => {
  useEffect(() => {
    const timerId = window.setInterval(() => {
      console.log("Timer running");
    }, 1000);

    return () => {
      window.clearInterval(timerId);
      console.log("Timer cleaned up");
    };
  }, []);

  return (
    <p className="mt-6 text-slate-300">Timer is active. Check the console.</p>
  );
};

export default CleanupDemo;
