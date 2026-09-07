import { useState } from "react";
import ProfilePanel from "./Components/ProfilePanel";

function App() {
  const [isFirstUser, setIsFirstUser] = useState<boolean>(true);

  const currentName: string = isFirstUser ? "Foysal" : "Sadik";

  const switchUser = (): void => {
    setIsFirstUser((current) => !current);
  };

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <ProfilePanel name={currentName} />

      <button
        type="button"
        onClick={switchUser}
        className="mt-4 rounded bg-emerald-600 px-4 py-2 text-white"
      >
        Switch User
      </button>
    </main>
  );
}

export default App;
