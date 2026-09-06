import { useState } from "react";

const FullNameCard = () => {
  const [firstName, setFirstName] = useState<string>("Foysal");
  const [lastName, setLastName] = useState<string>("Hossien");

  const fullName: string = `${firstName} ${lastName}`;

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">{fullName}</h2>

      <div className="mt-5 space-y-3">
        <input
          type="text"
          value={firstName}
          onChange={(event) => setFirstName(event.currentTarget.value)}
          className="w-full rounded bg-slate-800 p-3"
        />

        <input
          type="text"
          value={lastName}
          onChange={(event) => setLastName(event.currentTarget.value)}
          className="w-full rounded bg-slate-800 p-3"
        />
      </div>
    </section>
  );
};

export default FullNameCard;
