import { useRef } from "react";
import SmartInput, { type SmartInputHandle } from "./Components/SmartInput";

function App() {
  const inputRef = useRef<SmartInputHandle>(null);

  const focusInput = (): void => {
    inputRef.current?.focus();
  };

  const clearInput = (): void => {
    inputRef.current?.clear();
  };

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <section className="mx-auto max-w-md rounded-xl bg-slate-900 p-6">
        <h1 className="text-2xl font-bold text-white">Imperative Handle</h1>

        <div className="mt-6">
          <SmartInput ref={inputRef} placeholder="Enter your name" />
        </div>

        <div className="mt-4 flex gap-3">
          <button
            type="button"
            onClick={focusInput}
            className="rounded bg-blue-600 px-4 py-2 text-white"
          >
            Focus
          </button>

          <button
            type="button"
            onClick={clearInput}
            className="rounded bg-red-600 px-4 py-2 text-white"
          >
            Clear
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
