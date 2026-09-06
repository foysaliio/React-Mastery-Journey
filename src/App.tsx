import UserDashboard from "./Components/UserDashboard";

function App() {
  const isLoggedIn: boolean = true;
  const username: string = "Foysal";
  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <UserDashboard isLoggedIn={isLoggedIn} username={username} />
    </main>
  );
}

export default App;
