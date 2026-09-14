import { useState } from "react";
import Dashboard from "./Components/Dashboard";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  const [isDark, setIsDark] = useState<boolean>(true);

  const toggleTheme = (): void => {
    setIsDark((current) => !current);
  };

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

      <Dashboard isDark={isDark} />
    </main>
  );
}

export default App;
