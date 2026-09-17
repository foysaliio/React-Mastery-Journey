import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadUsers = async (): Promise<void> => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();

        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  if (loading) {
    return <p className="p-6 text-white">Loading users...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-400">{error}</p>;
  }

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Users</h2>

      <div className="mt-6 space-y-3">
        {users.map((user) => (
          <article key={user.id} className="rounded bg-slate-800 p-4">
            <h3 className="font-semibold">{user.name}</h3>

            <p className="text-sm text-slate-300">{user.email}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default UserList;
