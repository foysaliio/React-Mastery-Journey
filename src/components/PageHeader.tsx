type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header>
      <h1 className="text-3xl font-bold">{title}</h1>

      <p className="mt-2 text-zinc-600">{description}</p>
    </header>
  );
}
