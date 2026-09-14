type DashboardProps = {
  isDark: boolean;
};

function Dashboard({ isDark }: DashboardProps) {
  return (
    <section
      className={
        isDark
          ? "mt-6 rounded-xl bg-slate-900 p-6 text-white"
          : "mt-6 rounded-xl bg-white p-6 text-slate-900"
      }
    >
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <p className="mt-2">Current theme: {isDark ? "Dark" : "Light"}</p>
    </section>
  );
}

export default Dashboard;
