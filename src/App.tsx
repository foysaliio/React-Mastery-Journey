import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <section className="p-6 space-y-4">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </section>
    </main>
  );
};

export default App;
