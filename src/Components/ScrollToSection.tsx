import { useRef } from "react";

const ScrollToSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const scrollToTarget = (): void => {
    targetRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="bg-slate-950 p-6 text-white">
      <button
        type="button"
        onClick={scrollToTarget}
        className="rounded bg-blue-600 px-4 py-2"
      >
        Scroll to Target
      </button>

      <div className="h-200" />

      <div ref={targetRef} className="rounded-xl bg-slate-900 p-6">
        <h2 className="text-2xl font-bold">Target Section</h2>

        <p className="mt-3 text-slate-300">
          You scrolled to this element using a ref.
        </p>
      </div>
    </section>
  );
};

export default ScrollToSection;
