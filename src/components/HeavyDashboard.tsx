export default function HeavyDashboard() {
  return (
    <section className="rounded border p-5">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      <p className="mt-3 text-zinc-600">
        This component was loaded only when React needed it.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <div className="rounded bg-zinc-100 p-4">Users: 1,240</div>

        <div className="rounded bg-zinc-100 p-4">Revenue: $24,500</div>
      </div>
    </section>
  );
}
