export default function App() {
  const name: string = "Foysal";
  const role: string = "React Learner";

  return (
    <>
      {/* Fragment lets us return multiple elements without adding an extra DOM element */}
      <header className="bg-slate-950 p-6 text-white">
        <h1 className="text-4xl font-bold">React Fragments</h1>
      </header>

      <main className="min-h-screen bg-slate-900 p-6 text-white">
        <section className="rounded-xl bg-slate-800 p-6">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="mt-2 text-slate-300">{role}</p>
        </section>
      </main>
    </>
  );
}
