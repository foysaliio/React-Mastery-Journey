import PageHeader from "./components/PageHeader";

import UserList from "./features/users/UserList";

export default function App() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <PageHeader
        title="Users"
        description="Production-style React architecture."
      />

      <div className="mt-8">
        <UserList />
      </div>
    </main>
  );
}
