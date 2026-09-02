function App() {
  const name: string = "Foysal Hossien";
  const course: string = "React";
  const day: number = 1;
  const isLearning: boolean = true;

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      {/* JSX looks like HTML, but it is written inside JavaScript/TypeScript */}

      <h1 className="text-4xl font-bold">JSX Fundamentals</h1>

      <section className="mt-6 rounded-xl bg-slate-900 p-6">
        <h2 className="text-2xl font-semibold">Hello, {name} </h2>
        <p className="mt-3 text-slate-300">I am learning {course} </p>
        <p className="mt-2 text-slate-300">Current Day: {day} </p>
        <p className="mt-2 text-slate-300">
          Status: {isLearning ? "Learning React" : "Not Learning"}{" "}
        </p>
      </section>
    </main>
  );
}

export default App;
