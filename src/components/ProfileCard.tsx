interface ProfileCardProps {
  name: string;
  role: string;
  experience: number;
}

const ProfileCard = ({ name, role, experience }: ProfileCardProps) => {
  return (
    <article className="rounded-xl bg-slate-800 p-6 text-white">
      <h2 className="text-2xl font-semibold">{name}</h2>

      <p className="mt-2 text-slate-300">{role}</p>

      <p className="mt-1 text-sm text-slate-400">
        Experience: {experience} years
      </p>

      <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 font-medium">
        View Profile
      </button>
    </article>
  );
};

export default ProfileCard;
