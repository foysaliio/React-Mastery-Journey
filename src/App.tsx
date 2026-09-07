import { useState } from "react";
import PlayerCard from "./Components/PlayerCard";

function App() {
  const [player, setPlayer] = useState<string>("Foysal");

  const switchPlayer = (): void => {
    setPlayer((current) => (current === "Foysal" ? "Sadik" : "Foysal"));
  };

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <PlayerCard key={player} name={player} />

      <button
        type="button"
        onClick={switchPlayer}
        className="mt-4 rounded bg-emerald-600 px-4 py-2 text-white"
      >
        Switch Player
      </button>
    </main>
  );
}

export default App;
