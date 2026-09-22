import CreateUserForm from "./components/CreateUserForm";

import UserList from "./components/UserList";

export default function App() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">TanStack Query Mutations</h1>

      <div className="mt-8">
        <CreateUserForm />
      </div>

      <div className="mt-10">
        <UserList />
      </div>
    </main>
  );
}
