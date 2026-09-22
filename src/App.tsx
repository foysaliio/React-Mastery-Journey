import NetworkStatus from "./components/NetworkStatus";

import SaveButton from "./components/SaveButton";

export default function App() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">Reusable Logic</h1>

      <div className="mt-8 space-y-6">
        <NetworkStatus />

        <SaveButton />
      </div>
    </main>
  );
}
