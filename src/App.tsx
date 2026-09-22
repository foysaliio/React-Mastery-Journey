import { lazy, Suspense, useState } from "react";

const HeavyDashboard = lazy(() => import("./components/HeavyDashboard"));

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Lazy Loading</h1>

      <button
        type="button"
        onClick={() => setShowDashboard((current) => !current)}
        className="mt-8 rounded bg-black
          px-5 py-3 text-white"
      >
        {showDashboard ? "Hide Dashboard" : "Show Dashboard"}
      </button>

      <div className="mt-8">
        {showDashboard && (
          <Suspense fallback={<p>Loading dashboard...</p>}>
            <HeavyDashboard />
          </Suspense>
        )}
      </div>
    </main>
  );
}
