import { useState } from "react";

type UserForm = {
  name: string;
  email: string;
};

export default function App() {
  const [form, setForm] = useState<UserForm>({
    name: "",
    email: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [isSuccess, setIsSuccess] = useState(false);

  function updateField(field: keyof UserForm, value: string) {
    setForm((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  }

  async function handleSubmit() {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    try {
      if (!form.name || !form.email) {
        throw new Error("Name and email are required.");
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);

      setForm({
        name: "",
        email: "",
      });
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">Complex State Example</h1>

      <div className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="w-full rounded border p-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="w-full rounded border p-3"
        />

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="rounded bg-black px-5 py-3 text-white
            disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        {error && <p className="text-red-600">{error}</p>}

        {isSuccess && <p className="text-green-600">Submitted successfully.</p>}
      </div>
    </main>
  );
}
