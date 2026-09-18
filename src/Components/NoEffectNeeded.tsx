import { useState } from "react";

function NoEffectNeeded() {
  const [firstName, setFirstName] = useState<string>("");

  const [lastName, setLastName] = useState<string>("");

  const fullName = `${firstName} ${lastName}`.trim();

  const handleReset = (): void => {
    setFirstName("");
    setLastName("");
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">No Effect Needed</h2>

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
        Full name: {fullName || "Not provided"}
      </p>

      <button
        type="button"
        onClick={handleReset}
        className="mt-4 rounded bg-blue-600 px-4 py-2"
      >
        Reset
      </button>
    </section>
  );
}

export default NoEffectNeeded;
