import { useState } from "react";

import ErrorBoundary from "./components/ErrorBoundary";

import UserStatePanel from "./components/UserStatePanel";

type ViewState = "loading" | "error" | "empty" | "success" | "crash";

export default function App() {
  const [viewState, setViewState] = useState<ViewState>("success");

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">Production UI States</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {(["loading", "error", "empty", "success", "crash"] as ViewState[]).map(
          (state) => (
            <button
              key={state}
              type="button"
              onClick={() => setViewState(state)}
              className="rounded border px-3 py-2"
            >
              {state}
            </button>
          ),
        )}
      </div>

      <div className="mt-8">
        <ErrorBoundary
          fallback={
            <section role="alert" className="rounded border p-5">
              <h2 className="font-semibold">Something went wrong</h2>

              <p className="mt-2">Please refresh or try again.</p>
            </section>
          }
        >
          <UserStatePanel state={viewState} />
        </ErrorBoundary>
      </div>
    </main>
  );
}
