type ViewState = "loading" | "error" | "empty" | "success" | "crash";

type UserStatePanelProps = {
  state: ViewState;
};

const users = [
  {
    id: 1,
    name: "Foysal",
    email: "foysal@example.com",
  },
  {
    id: 2,
    name: "Alex",
    email: "alex@example.com",
  },
];

export default function UserStatePanel({ state }: UserStatePanelProps) {
  if (state === "crash") {
    throw new Error("User panel crashed.");
  }

  if (state === "loading") {
    return (
      <section
        aria-busy="true"
        aria-live="polite"
        className="rounded border p-5"
      >
        <p>Loading users...</p>
      </section>
    );
  }

  if (state === "error") {
    return (
      <section role="alert" className="rounded border p-5">
        <h2 className="font-semibold">Could not load users</h2>

        <p className="mt-2">Please try again.</p>
      </section>
    );
  }

  if (state === "empty") {
    return (
      <section className="rounded border p-5">
        <h2 className="font-semibold">No users yet</h2>

        <p className="mt-2 text-zinc-600">
          Add your first user to get started.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded border p-5">
      <h2 className="text-xl font-semibold">Users</h2>

      <ul className="mt-4 space-y-3">
        {users.map((user) => (
          <li key={user.id} className="rounded bg-zinc-100 p-3">
            <p className="font-medium">{user.name}</p>

            <p className="text-sm text-zinc-600">{user.email}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
