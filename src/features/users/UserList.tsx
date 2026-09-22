import { useQuery } from "@tanstack/react-query";

import UserCard from "./components/UserCard";

import { getUsers } from "./services/userService";

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
    return (
      <p role="alert" className="text-red-600">
        {error.message}
      </p>
    );
  }

  if (!users || users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
