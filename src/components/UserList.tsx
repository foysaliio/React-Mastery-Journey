import { useEffect, useState, type FormEvent } from "react";

import { createUser, getUsers } from "../services/userService";

import type { User } from "../types/user";

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [isCreating, setIsCreating] = useState(false);

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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail) {
      return;
    }

    const optimisticUser: User = {
      id: -Date.now(),
      name: trimmedName,
      email: trimmedEmail,
    };

    setUsers((currentUsers) => [optimisticUser, ...currentUsers]);

    setName("");
    setEmail("");
    setIsCreating(true);
    setError(null);

    try {
      const createdUser = await createUser({
        name: trimmedName,
        email: trimmedEmail,
      });

      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user.id === optimisticUser.id ? createdUser : user,
        ),
      );
    } catch (error) {
      setUsers((currentUsers) =>
        currentUsers.filter((user) => user.id !== optimisticUser.id),
      );

      setError(
        error instanceof Error ? error.message : "Could not create user.",
      );
    } finally {
      setIsCreating(false);
    }
  }

  if (isLoading) {
    return <p>Loading users...</p>;
  }

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
          className="w-full rounded border p-3"
        />

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          className="w-full rounded border p-3"
        />

        <button
          type="submit"
          disabled={isCreating}
          className="rounded bg-black
            px-5 py-3 text-white
            disabled:opacity-50"
        >
          {isCreating ? "Creating..." : "Create User"}
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}

      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="space-y-3">
          {users.map((user) => (
            <article key={user.id} className="rounded border p-4">
              <p className="font-semibold">{user.name}</p>

              <p className="text-sm text-zinc-600">{user.email}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
