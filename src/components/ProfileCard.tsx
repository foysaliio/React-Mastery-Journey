function ProfileCard() {
  const name: string = "Foysal";
  const role: string = "Frontend Developer";
  const learning: string = "React";

  return (
    <article className="rounded-xl bg-slate-800 p-6 text-white">
      <h2 className="text-2xl font-semibold">{name}</h2>

      <p className="mt-2 text-slate-300">{role}</p>

      <p className="mt-4 text-sm text-slate-400">
        Currently learning: {learning}
      </p>
    </article>
  );
}

export default ProfileCard;
