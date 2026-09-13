import { useState } from "react";
import type { SubmitEvent } from "react";

type FormState = {
  name: string;
  email: string;
};

function ValidationForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
  });

  const [error, setError] = useState<string>("");

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!form.name.trim()) {
      setError("Name is required.");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Enter a valid email.");
      return;
    }

    setError("");
    console.log("Valid form:", form);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Basic Validation</h2>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          value={form.name}
          onChange={(event) =>
            setForm({
              ...form,
              name: event.currentTarget.value,
            })
          }
          placeholder="Name"
          className="w-full rounded bg-slate-800 p-3"
        />

        <input
          type="email"
          value={form.email}
          onChange={(event) =>
            setForm({
              ...form,
              email: event.currentTarget.value,
            })
          }
          placeholder="Email"
          className="w-full rounded bg-slate-800 p-3"
        />

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button type="submit" className="rounded bg-blue-600 px-5 py-2">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ValidationForm;
