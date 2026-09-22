import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">Composition</h1>

      <div className="mt-8 space-y-6">
        <ProfileCard />

        <Card title="Project">
          <p>React Mastery Journey</p>

          <p className="mt-2 text-zinc-600">
            Learning reusable component architecture.
          </p>
        </Card>
      </div>
    </main>
  );
}
