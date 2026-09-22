import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

export default function App() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">useDebounce</h1>

      <div className="mt-8 space-y-4">
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search..."
          className="w-full rounded border p-3"
        />

        <div className="rounded border p-4">
          <p>
            Current value: <strong>{search}</strong>
          </p>

          <p className="mt-2">
            Debounced value: <strong>{debouncedSearch}</strong>
          </p>
        </div>
      </div>
    </main>
  );
}
