interface UserPanelProps {
  user: {
    name: string;
    role: string;
  };
}

const UserPanel = ({ user }: UserPanelProps) => {
  return (
    <section className="rounded border p-4">
      <h2 className="text-xl font-semibold">User Panel</h2>

      <p className="mt-2">Name: {user.name}</p>

      <p>Role: {user.role}</p>
    </section>
  );
};

export default UserPanel;
