import UserStatus from "./Components/UserStatus";

function App() {
  const isLoggedIn: boolean = true;
  const username: string = "Foysal";
  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <UserStatus isLoggedIn={isLoggedIn} username={username} />
    </main>
  );
}

export default App;
