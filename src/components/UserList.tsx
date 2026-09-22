import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function fetchUsers() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to load users.");
        }

        const data = (await response.json()) as User[];

        if (!ignore) {
          setUsers(data);
        }
      } catch (error) {
        if (!ignore) {
          setError(
            error instanceof Error ? error.message : "Something went wrong.",
          );
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    fetchUsers();

    return () => {
      ignore = true;
    };
  }, []);

  if (isLoading) {
    return <p className="mt-6">Loading users...</p>;
  }

  if (error) {
    return <p className="mt-6 text-red-600">{error}</p>;
  }

  if (users.length === 0) {
    return <p className="mt-6 text-zinc-500">No users found.</p>;
  }

  return (
    <div className="mt-6 space-y-3">
      {users.map((user) => (
        <article key={user.id} className="rounded border p-4">
          <p className="font-semibold">{user.name}</p>

          <p className="text-sm text-zinc-600">{user.email}</p>
        </article>
      ))}
    </div>
  );
}
