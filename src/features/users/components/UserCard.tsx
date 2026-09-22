import type { User } from "../types/user";

type UserCardProps = {
  user: User;
};

export default function UserCard({ user }: UserCardProps) {
  return (
    <article className="rounded border p-4">
      <h2 className="font-semibold">{user.name}</h2>

      <p className="text-sm text-zinc-600">{user.email}</p>
    </article>
  );
}
