import { useEffect, useState } from "react";

const WindowSize = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = (): void => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Window Size</h2>

      <p className="mt-4 text-slate-300">Window width: {width}px</p>
    </section>
  );
};

export default WindowSize;
