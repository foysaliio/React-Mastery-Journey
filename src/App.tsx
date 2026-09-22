import { useState } from "react";

import ProfileCard from "./components/ProfileCard";

export default function App() {
  const [count, setCount] = useState(0);

  console.log("App rendered");

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">React Re-rendering</h1>

      <div className="mt-8 space-y-6">
        <div className="rounded border p-5">
          <p className="text-xl">Count: {count}</p>

          <button
            type="button"
            onClick={() => setCount((current) => current + 1)}
            className="mt-4 rounded bg-black
              px-4 py-2 text-white"
          >
            Increment
          </button>
        </div>

        <ProfileCard name="Foysal" />
      </div>
    </main>
  );
}
