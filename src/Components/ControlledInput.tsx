import { useState } from "react";

const ControlledInput = () => {
  const [name, setName] = useState<string>("");

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Controlled Input</h2>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
        placeholder="Enter Your name"
        className="mt-5 w-full rounded bg-slate-800 p-3"
      />

      <p className="mt-4 text-slate-300">Your name: {name || "Nothing yet"}</p>
    </section>
  );
};

export default ControlledInput;
