interface ProfileCardProps {
  name: string;
  role: string;
  experience: number;
  isAvailable: boolean;
}

function ProfileCard({
  name,
  role,
  experience,
  isAvailable,
}: ProfileCardProps) {
  return (
    <article className="rounded-xl bg-slate-800 p-6 text-white space-y-2">
      <h2 className="text-2xl font-semibold"> {name} </h2>

      <p className="text-slate-300"> {role} </p>

      <p className="text-slate-400">Experience: {experience} years</p>

      <p className="">{isAvailable ? "Available" : "Not Available"} </p>
    </article>
  );
}

export default ProfileCard;
