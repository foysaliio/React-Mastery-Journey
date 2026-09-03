import StatusBadge from "./components/StatusBadge";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <main className="min-h-screen bg-slate-900 p-6">
      <UserCard
        name="Foysal"
        role="Frontend Developer"
        status={<StatusBadge text="Available" />}
      />
    </main>
  );
};

export default App;
