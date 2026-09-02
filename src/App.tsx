function App() {
  const name: string = "Foysal";
  const age: number = 24;
  const skills: string[] = ["React", "TypeScript", "Tailwind CSS"];
  const isAvailable: boolean = true;

  const getGreeting = (username: string): string => {
    return `Welcome, ${username}`;
  };

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="text-4xl font-bold">JavaScript Expressions in JSX</h1>

      <section className="mt-6 space-y-4 rounded-xl bg-slate-900 p-6">
        {/* Variable */}
        <p> {name} </p>

        {/* Number expression */}
        <p>Next year age: {age + 1} </p>

        {/* Function call */}
        <p> {getGreeting(name)} </p>

        {/* Array method */}
        <p>Total skills: {skills.length} </p>

        {/* Ternary expression */}
        <p>
          Status: {isAvailable ? "Available for learning" : "Not available"};
        </p>

        {/* Method call */}
        <p>Uppercase name: {name.toUpperCase()} </p>
      </section>
    </main>
  );
}

export default App;
