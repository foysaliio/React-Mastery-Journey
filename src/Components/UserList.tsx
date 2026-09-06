interface User {
  id: number;
  name: string;
}

const UserList = () => {
  const users: User[] = [
    { id: 101, name: "Foysal" },
    { id: 102, name: "Mim" },
    { id: 103, name: "Rahim" },
  ];

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Users</h2>

      <ul className="mt-5 space-y-2">
        {users.map((user) => (
          <li key={user.id} className="bg-slate-800 rounded px-4 py-2">
            {user.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserList;
