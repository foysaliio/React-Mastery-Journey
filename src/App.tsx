import { useToggle } from "./hooks/useToggle";

export default function App() {
  const modal = useToggle();

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">
        Custom Hook
      </h1>

      <button
        onClick={modal.toggle}
        className="mt-8 rounded bg-black
          px-5 py-3 text-white"
      >
        Toggle Modal
      </button>

      {modal.value && (
        <section className="mt-6 rounded border p-5">
          <h2 className="text-xl font-semibold">
            Modal Content
          </h2>

          <p className="mt-2 text-zinc-600">
            This state is managed by
            useToggle.
          </p>

          <button
            onClick={modal.turnOff}
            className="mt-4 rounded border
              px-4 py-2"
          >
            Close
          </button>
        </section>
      )}
    </main>
  );
}