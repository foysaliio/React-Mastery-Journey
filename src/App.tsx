function App() {
  const username: string = "Foysal";
  const isLoggedIn: boolean = true;

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="text-4xl font-bold">Why React Exists</h1>
      <p className="mt-4 text-slate-300">
        React makes it easier to build dynamic and reusable user interfaces.
      </p>

      <section className="mt-8 rounded-xl bg-slate-900 p-6">
        <h2 className="text-2xl font-semibold">
          {isLoggedIn ? `Welcome, ${username}` : "Please log in"}
        </h2>

        <button className="mt-4 rounded-lg bg-blue-600 px-5 py-2 font-medium">
          View Dashboard
        </button>
      </section>
    </main>
  );
}

export default App;
