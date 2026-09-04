import UserCard from "./components/UserCard";

const App = () => {
  const name: string = "Foysal";
  const role: string = "Frontend Developer";
  const email: string = "foysal@example.com";
  const country: string = "Bangladesh";

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <UserCard name={name} role={role} email={email} country={country} />
    </main>
  );
};

export default App;
