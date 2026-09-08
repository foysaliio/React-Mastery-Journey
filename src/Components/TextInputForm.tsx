import { useState } from "react";

const TextInputForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Text Inputs</h2>

      <div className="mt-5 space-y-4">
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.currentTarget.value);
          }}
          placeholder="Enter your name"
          className="w-full rounded bg-slate-800 p-3"
        />

        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.currentTarget.value);
          }}
          placeholder="Enter your email"
          className="w-full rounded bg-slate-800 p-3"
        />
      </div>

      <div className="mt-6 space-y-2 text-slate-300">
        <p>Name: {name || "Not Provided"} </p>
        <p>Email: {email || "Not Provided"} </p>
      </div>
    </section>
  );
};

export default TextInputForm;
