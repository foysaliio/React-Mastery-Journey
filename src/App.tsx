import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <section className="p-6 grid gap-4 md:grid-cols-3">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </section>
    </main>
  );
}

export default App;
