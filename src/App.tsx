import { useState } from "react";

import Toggle from "./components/Toggle";

export default function App() {
  const [notifications, setNotifications] = useState(false);

  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">Controlled Component</h1>

      <div className="mt-8 space-y-4">
        <Toggle checked={notifications} onChange={setNotifications} />

        <p>
          Notifications: <strong>{notifications ? "On" : "Off"}</strong>
        </p>

        <button
          type="button"
          onClick={() => setNotifications(false)}
          className="rounded bg-black px-4 py-2 text-white"
        >
          Turn Off From Parent
        </button>
      </div>
    </main>
  );
}
