import { useLayoutEffect, useRef, useState } from "react";

function MeasureBox() {
  const boxRef = useRef<HTMLDivElement>(null);

  const [expanded, setExpanded] = useState<boolean>(false);

  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (!boxRef.current) {
      return;
    }

    const rect = boxRef.current.getBoundingClientRect();

    setHeight(rect.height);
  }, [expanded]);

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Layout Measurement</h2>

      <div ref={boxRef} className="mt-5 rounded bg-slate-800 p-4">
        <p>React can measure this element.</p>

        {expanded && (
          <p className="mt-4 text-slate-300">
            Extra content makes this box taller.
          </p>
        )}
      </div>

      <p className="mt-4 text-slate-300">Height: {Math.round(height)}px</p>

      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        className="mt-4 rounded bg-blue-600 px-4 py-2"
      >
        {expanded ? "Collapse" : "Expand"}
      </button>
    </section>
  );
}

export default MeasureBox;
