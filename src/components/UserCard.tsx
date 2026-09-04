import UserDetails from "./UserDetails";

interface UserCardProps {
  name: string;
  role: string;
  email: string;
  country: string;
}

const UserCard = ({ name, role, email, country }: UserCardProps) => {
  return (
    <article className="max-w-md rounded-xl bg-slate-800 p-6 text-white">
      <h2 className="text-2xl font-bold"> {name} </h2>

      <p className="mt-1 text-slate-400"> {role} </p>

      <UserDetails email={email} country={country} />
    </article>
  );
};

export default UserCard;
