import { useState } from "react";

function SearchBox() {
  const [query, setQuery] = useState<string>("");

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Search</h2>

      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
        placeholder="Search products"
        className="mt-4 w-full rounded bg-slate-800 p-3"
      />

      <p className="mt-3 text-slate-300">Searching for: {query || "Nothing"}</p>
    </section>
  );
}

export default SearchBox;
