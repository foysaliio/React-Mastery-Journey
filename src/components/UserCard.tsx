import type { ReactNode } from "react";

interface UserCardProps {
  name: string;
  role: string;
  status: ReactNode;
}

const UserCard = ({ name, role, status }: UserCardProps) => {
  return (
    <article className="rounded-xl bg-slate-800 p-6 text-white">
      <div className="flex items-start justify-between gap-4">
        <div className="">
          <h2 className="text-2xl font-bold"> {name} </h2>

          <p className="mt-1 text-slate-400"> {role} </p>
        </div>

        {status}
      </div>
    </article>
  );
};

export default UserCard;
