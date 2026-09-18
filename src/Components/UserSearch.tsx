import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserSearch = () => {
  const [userId, setUserId] = useState<number>(1);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    const loadUser = async (): Promise<void> => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          {
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }

        const data: User = await response.json();

        setUser(data);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadUser();

    return () => {
      controller.abort();
    };
  }, [userId]);

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">User Search</h2>

      <select
        value={userId}
        onChange={(event) => setUserId(Number(event.currentTarget.value))}
        className="mt-5 rounded bg-slate-800 p-3"
      >
        <option value={1}>User 1</option>
        <option value={2}>User 2</option>
        <option value={3}>User 3</option>
      </select>

      {loading && <p className="mt-5 text-slate-300">Loading...</p>}

      {error && <p className="mt-5 text-red-400">{error}</p>}

      {!loading && user && (
        <div className="mt-5">
          <h3 className="font-semibold">{user.name}</h3>

          <p className="text-slate-300">{user.email}</p>
        </div>
      )}
    </section>
  );
};

export default UserSearch;
