import { useLocalStorage } from "./hooks/useLocalStorage";

export default function App() {
  const [name, setName] = useLocalStorage<string>("username", "");

  const [darkMode, setDarkMode] = useLocalStorage<boolean>("dark-mode", false);

  return (
    <main
      className={
        darkMode
          ? "min-h-screen bg-zinc-950 p-8 text-white"
          : "min-h-screen bg-white p-8 text-black"
      }
    >
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold">useLocalStorage</h1>

        <div className="mt-8 space-y-5">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            className="w-full rounded border
              bg-transparent p-3"
          />

          <p>Hello, {name || "Guest"}</p>

          <button
            type="button"
            onClick={() => setDarkMode((current) => !current)}
            className="rounded bg-black
              px-5 py-3 text-white"
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </main>
  );
}
