import { useCallback, useMemo, useState } from "react";

import ProfileCard from "./components/ProfileCard";

export default function App() {
  const [count, setCount] = useState(0);

  const [users] = useState(["Foysal", "Alex", "Sarah", "John"]);

  const sortedUsers = useMemo(() => {
    console.log("Sorting users...");

    return [...users].sort();
  }, [users]);

  const handleFollow = useCallback(() => {
    console.log("Following Foysal");
  }, []);

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">React Memoization</h1>

      <div className="mt-8 space-y-6">
        <div className="rounded border p-5">
          <p>Count: {count}</p>

          <button
            type="button"
            onClick={() => setCount((current) => current + 1)}
            className="mt-3 rounded bg-black
              px-4 py-2 text-white"
          >
            Increment
          </button>
        </div>

        <ProfileCard name="Foysal" onFollow={handleFollow} />

        <section className="rounded border p-5">
          <h2 className="font-semibold">Sorted Users</h2>

          <ul className="mt-3 space-y-1">
            {sortedUsers.map((user) => (
              <li key={user}>{user}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
