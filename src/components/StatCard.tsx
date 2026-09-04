interface StatCardProps {
  title: string;
  value: number;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <article className="rounded-xl bg-slate-800 p-6 text-white">
      <p className="text-sm text-slate-400"> {title} </p>

      <h2 className="mt-2 text-3xl font-bold"> {value} </h2>
    </article>
  );
};

export default StatCard;
