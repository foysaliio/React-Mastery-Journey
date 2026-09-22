import Card from "./Card";

export default function ProfileCard() {
  return (
    <Card
      title="Developer Profile"
      footer={
        <button
          type="button"
          className="rounded bg-black
            px-4 py-2 text-white"
        >
          View Profile
        </button>
      }
    >
      <p>Foysal Hossien</p>

      <p className="mt-1 text-zinc-600">Frontend Developer</p>
    </Card>
  );
}
