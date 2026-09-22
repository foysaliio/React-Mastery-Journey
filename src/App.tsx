import { useFetch } from "./hooks/useFetch";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function App() {
  const { data, isLoading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users",
  );

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">useFetch</h1>

      {isLoading && <p className="mt-6">Loading...</p>}

      {error && <p className="mt-6 text-red-600">{error}</p>}

      {data && (
        <div className="mt-6 space-y-3">
          {data.map((user) => (
            <article key={user.id} className="rounded border p-4">
              <p className="font-semibold">{user.name}</p>

              <p className="text-sm text-zinc-600">{user.email}</p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
