import { useEffect, useState } from "react";

import { getUsers } from "../services/userService";

import type { User } from "../types/user";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadUsers() {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getUsers(controller.signal);

        setUsers(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setError(
          error instanceof Error ? error.message : "Something went wrong.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    }

    loadUsers();

    return () => {
      controller.abort();
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
