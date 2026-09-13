import { useState } from "react";
import NameInput from "./Components/NameInput";
import NamePreview from "./Components/NamePreview";

function App() {
  const [name, setName] = useState<string>("");
  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <div className="mx-auto max-w-xl space-y-6">
        <NameInput name={name} onNameChange={setName} />

        <NamePreview name={name} />
      </div>
    </main>
  );
}

export default App;
