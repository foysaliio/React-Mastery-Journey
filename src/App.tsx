import CounterCard from "./components/CounterCard";

const App = () => {
  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <section className="grid gap-4 md:grid-cols-2">
        <CounterCard title="Counter A" />
        <CounterCard title="Counter B" />
      </section>
    </main>
  );
};

export default App;
