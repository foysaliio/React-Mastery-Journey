import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <main className="min-h-screen grid gap-5 bg-slate-900 p-6">
      <ProfileCard name="Foysal" experience={4} isAvailable={true} />
      <ProfileCard name="Foysal" role="Developer" experience={4} />
      <ProfileCard name="Foysal" role="Developer" isAvailable={true} />
      <ProfileCard
        name="Foysal"
        role="Developer"
        experience={4}
        isAvailable={true}
      />
    </main>
  );
};

export default App;
