interface NamePreviewProps {
  name: string;
}

const NamePreview = ({ name }: NamePreviewProps) => {
  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Name Preview</h2>

      <p className="mt-4 text-slate-300">{name || "No name yet"}</p>
    </section>
  );
};

export default NamePreview;
