import { useQuery } from "@tanstack/react-query";

import { getUsers } from "../services/userService";

export default function UserList() {
  const {
    data: users,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],

    queryFn: ({ signal }) => getUsers(signal),
  });

  if (isPending) {
    return <p>Loading users...</p>;
  }

  if (isError) {
    return <p className="text-red-600">{error.message}</p>;
  }

  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <article key={user.id} className="rounded border p-4">
          <p className="font-semibold">{user.name}</p>

          <p className="text-sm text-zinc-600">{user.email}</p>
        </article>
      ))}
    </div>
  );
}
