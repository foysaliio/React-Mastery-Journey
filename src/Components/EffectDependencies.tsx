import { useEffect, useState } from "react";

const EffectDependencies = () => {
  const [firstName, setFirstName] = useState<string>("Foysal");
  const [lastName, setLastName] = useState<string>("Hossien");

  useEffect(() => {
    document.title = `${firstName} ${lastName}`;
  }, [firstName, lastName]);

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Effect Dependencies</h2>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.currentTarget.value)}
          placeholder="First name"
          className="w-full rounded bg-slate-800 p-3"
        />

        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.currentTarget.value)}
          placeholder="Last name"
          className="w-full rounded bg-slate-800 p-3"
        />
      </div>

      <p className="mt-6 text-slate-300">
        Full name: {firstName} {lastName}
      </p>
    </section>
  );
};

export default EffectDependencies;
