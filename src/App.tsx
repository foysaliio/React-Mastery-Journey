import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <section className="grid gap-4 p-6 md:grid-cols-2">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </section>
    </main>
  );
};

export default App;
