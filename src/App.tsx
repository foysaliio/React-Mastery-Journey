import { useDeferredValue, useMemo, useState, useTransition } from "react";

const items = Array.from({ length: 5000 }, (_, index) => `Item ${index + 1}`);

export default function App() {
  const [search, setSearch] = useState("");

  const [tab, setTab] = useState("home");

  const [isPending, startTransition] = useTransition();

  const deferredSearch = useDeferredValue(search);

  const filteredItems = useMemo(() => {
    const query = deferredSearch.toLowerCase();

    return items.filter((item) => item.toLowerCase().includes(query));
  }, [deferredSearch]);

  function changeTab(nextTab: string) {
    startTransition(() => {
      setTab(nextTab);
    });
  }

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Concurrent & Deferred UI</h1>

      <section className="mt-8">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search items..."
          className="w-full rounded border p-3"
        />

        <p className="mt-3 text-sm text-zinc-500">
          Showing results for: {deferredSearch}
        </p>

        <div className="mt-4 max-h-60 overflow-auto">
          {filteredItems.slice(0, 50).map((item) => (
            <p key={item} className="border-b py-2">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => changeTab("home")}
            className="rounded border px-4 py-2"
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => changeTab("dashboard")}
            className="rounded border px-4 py-2"
          >
            Dashboard
          </button>
        </div>

        <div className="mt-5 rounded border p-5">
          {isPending ? (
            <p>Updating view...</p>
          ) : (
            <p>
              Current tab: <strong>{tab}</strong>
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
