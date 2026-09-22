import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function UserPanel() {
  const user = useContext(UserContext);

  if (!user) {
    return <p>User context is unavailable.</p>;
  }

  return (
    <section className="rounded border p-4">
      <h2 className="text-xl font-semibold">User Panel</h2>

      <p className="mt-2">Name: {user.name}</p>

      <p>Role: {user.role}</p>
    </section>
  );
}
