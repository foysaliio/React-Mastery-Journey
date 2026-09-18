import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

function getUser(id: number): Promise<User> {
  const delay = id === 1 ? 3000 : 1000;

  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        id,
        name: `User ${id}`,
      });
    }, delay);
  });
}

const RaceConditionDemo = () => {
  const [userId, setUserId] = useState<number>(1);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let ignore = false;

    const loadUser = async (): Promise<void> => {
      const data = await getUser(userId);

      if (!ignore) {
        setUser(data);
      }
    };

    loadUser();

    return () => {
      ignore = true;
    };
  }, [userId]);
  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Race Conditions</h2>

      <div className="mt-5 flex gap-3">
        <button
          type="button"
          onClick={() => setUserId(1)}
          className="rounded bg-blue-600 px-4 py-2"
        >
          User 1
        </button>

        <button
          type="button"
          onClick={() => setUserId(2)}
          className="rounded bg-blue-600 px-4 py-2"
        >
          User 2
        </button>
      </div>

      <p className="mt-5 text-slate-300">Selected ID: {userId}</p>

      <p className="mt-2 text-slate-300">
        Loaded: {user?.name ?? "Loading..."}
      </p>
    </section>
  );
};

export default RaceConditionDemo;
