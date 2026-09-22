import { useOnlineStatus } from "../hooks/useOnlineStatus";

export default function NetworkStatus() {
  const isOnline = useOnlineStatus();

  return (
    <div className="rounded border p-4">
      <p className="font-medium">Network Status</p>

      <p className="mt-2">{isOnline ? "🟢 Online" : "🔴 Offline"}</p>
    </div>
  );
}
