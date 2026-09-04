import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <section className="">
      <h2 className="text-white mt-2 mb-5 text-2xl font-semibold">
        Learning Statistics
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title="Completed Topics" value={25} />
        <StatCard title="Projects" value={4} />
        <StatCard title="Current Streak" value={12} />
      </div>
    </section>
  );
};

export default Dashboard;
