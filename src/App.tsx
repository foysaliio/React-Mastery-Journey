import Button from "./components/Button";

export default function App() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">Reusable Component APIs</h1>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button>Save</Button>

        <Button variant="secondary">Cancel</Button>

        <Button variant="danger" size="lg">
          Delete
        </Button>

        <Button disabled onClick={() => console.log("Clicked")}>
          Disabled
        </Button>
      </div>
    </main>
  );
}
