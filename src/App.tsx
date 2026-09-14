import { useState } from "react";
import TemperatureInput from "./Components/TemperatureInput";
import TemperaturePreview from "./Components/TemperaturePreview";

function App() {
  const [temperature, setTemperature] = useState<number>(25);

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <div className="mx-auto max-w-xl space-y-6">
        <TemperatureInput
          temperature={temperature}
          onTemperatureChange={setTemperature}
        />
        <TemperaturePreview temperature={temperature} />
      </div>
    </main>
  );
}

export default App;
