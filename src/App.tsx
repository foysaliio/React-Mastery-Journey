function App() {
  const username: string = "Foysal";
  const isLoggedIn: boolean = true;
  const notificationCount: number = 3;

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="text-4xl font-bold">Declarative UI</h1>

      <section className="mt-6 rounded-xl bg-slate-900 p-6">
        <h2 className="text-2xl font-semibold">
          {isLoggedIn ? `Welcome, ${username}` : "Please log in"}
        </h2>

        {isLoggedIn && (
          <p className="mt-3 text-slate-300">
            You have {notificationCount} new notifications.
          </p>
        )}
      </section>
    </main>
  );
}

export default App;
