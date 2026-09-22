type ProfileCardProps = {
  name: string;
};

export default function ProfileCard({ name }: ProfileCardProps) {
  console.log("ProfileCard rendered");

  return (
    <section className="rounded border p-5">
      <h2 className="text-xl font-semibold">{name}</h2>

      <p className="mt-2 text-zinc-600">Frontend Developer</p>
    </section>
  );
}
