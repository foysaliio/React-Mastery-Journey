function ProfileCard() {
  const name: string = "Foysal";
  const role: string = "React Learner";

  return (
    <article className="rounded-xl bg-slate-800 p-6 text-white">
      <h2 className="text-2xl font-semibold"> {name} </h2>
      <p className="mt-2 text-slate-300"> {role} </p>
    </article>
  );
}

export default ProfileCard;
