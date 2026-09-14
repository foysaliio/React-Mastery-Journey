import { useState } from "react";
import ProfileEditor from "./Components/ProfileEditor";
import ProfilePreview from "./Components/ProfilePreview";

function App() {
  const [name, setName] = useState<string>("");

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <div className="mx-auto max-w-xl space-y-6">
        <ProfileEditor name={name} onNameChange={setName} />

        <ProfilePreview name={name} />
      </div>
    </main>
  );
}

export default App;
