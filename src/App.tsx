import { useInput } from "./hooks/useInput";

export default function App() {
  const name = useInput();
  const email = useInput();

  function handleSubmit() {
    console.log({
      name: name.value,
      email: email.value,
    });

    name.reset();
    email.reset();
  }

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">Typed Custom Hook</h1>

      <div className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={name.value}
          onChange={name.onChange}
          className="w-full rounded border p-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
          className="w-full rounded border p-3"
        />

        <button
          type="button"
          onClick={handleSubmit}
          className="rounded bg-black px-5 py-3 text-white"
        >
          Submit
        </button>
      </div>
    </main>
  );
}
