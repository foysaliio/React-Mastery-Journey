import HeadlessToggle from "./components/HeadlessToggle";

export default function App() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">Headless Component</h1>

      <div className="mt-8 space-y-6">
        <HeadlessToggle>
          {({ value, toggle }) => (
            <div className="rounded border p-5">
              <p className="font-medium">
                Status: {value ? "Enabled" : "Disabled"}
              </p>

              <button
                type="button"
                onClick={toggle}
                className="mt-4 rounded bg-black
                  px-4 py-2 text-white"
              >
                Toggle
              </button>
            </div>
          )}
        </HeadlessToggle>

        <HeadlessToggle defaultValue>
          {({ value, toggle }) => (
            <button
              type="button"
              onClick={toggle}
              className="rounded-full border
                px-6 py-3"
            >
              {value ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          )}
        </HeadlessToggle>
      </div>
    </main>
  );
}
