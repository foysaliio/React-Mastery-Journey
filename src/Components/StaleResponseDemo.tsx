import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

function fetchUser(id: number): Promise<User> {
  const delay = id === 1 ? 2500 : 800;

  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`,
      });
    }, delay);
  });
}

function StaleResponseDemo() {
  const [userId, setUserId] = useState<number>(1);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadUser(): Promise<void> {
      const data = await fetchUser(userId);

      if (cancelled) {
        return;
      }

      setUser(data);
    }

    loadUser();

    return () => {
      cancelled = true;
    };
  }, [userId]);

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Stale Responses</h2>

      <div className="mt-5 flex gap-3">
        <button
          type="button"
          onClick={() => setUserId(1)}
          className="rounded bg-blue-600 px-4 py-2"
        >
          Load User 1
        </button>

        <button
          type="button"
          onClick={() => setUserId(2)}
          className="rounded bg-blue-600 px-4 py-2"
        >
          Load User 2
        </button>
      </div>

      <div className="mt-6 text-slate-300">
        <p>Current user ID: {userId}</p>

        <p className="mt-2">Result: {user?.name ?? "Loading..."}</p>
      </div>
    </section>
  );
}

export default StaleResponseDemo;
