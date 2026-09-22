import Header from "./components/Header";
import UserPanel from "./components/UserPanel";
import { UserContext } from "./context/UserContext";

export default function App() {
  const user = {
    name: "Foysal",
    role: "Frontend Developer",
  };

  return (
    <UserContext value={user}>
      <main className="mx-auto max-w-2xl p-8">
        <h1 className="text-3xl font-bold">Context Problem</h1>

        <div className="mt-8 space-y-6">
          <Header />
          <UserPanel />
        </div>
      </main>
    </UserContext>
  );
}
