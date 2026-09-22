import UserList from "./components/UserList";

export default function App() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">Users</h1>

      <UserList />
    </main>
  );
}
