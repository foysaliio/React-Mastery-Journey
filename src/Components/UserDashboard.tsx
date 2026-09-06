interface UserDashboardProps {
  isLoggedIn: boolean;
  username: string;
}

const UserDashboard = ({ isLoggedIn, username }: UserDashboardProps) => {
  if (!isLoggedIn) {
    return (
      <section className="rounded-xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-bold">Access Denied</h2>

        <p className="mt-2 text-slate-400">Please log in to countinue.</p>
      </section>
    );
  }

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Welcome, {username}</h2>

      <p className="mt-2 text-slate-400">You can now access your dashboard</p>
    </section>
  );
};

export default UserDashboard;
