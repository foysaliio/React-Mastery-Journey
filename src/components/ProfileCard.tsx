interface ProfileCardProps {
  name: string;
  role: string;
  experience: number;
  isAvailable: boolean;
}

// Props are destructured directly in the function parameter.
// Props Object
// ↓
// Destructure
// ↓
// Individual values

// props.name       → name
// props.role       → role
// props.experience → experience

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
