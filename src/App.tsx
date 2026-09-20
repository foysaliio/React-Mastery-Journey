import { useRef } from "react";
import CustomInput from "./Components/CustomInput";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = (): void => {
    inputRef.current?.focus();
  };

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <section className="mx-auto max-w-md rounded-xl bg-slate-900 p-6">
        <CustomInput
          ref={inputRef}
          label="Name"
          placeholder="Enter your name"
        />

        <button
          type="button"
          onClick={focusInput}
          className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
        >
          Focus Name
        </button>
      </section>
    </main>
  );
}

export default App;
