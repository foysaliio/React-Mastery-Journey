import { useOnlineStatus } from "../hooks/useOnlineStatus";

export default function SaveButton() {
  const isOnline = useOnlineStatus();

  return (
    <button
      type="button"
      disabled={!isOnline}
      className="rounded bg-black px-5 py-3
        text-white disabled:cursor-not-allowed
        disabled:opacity-40"
    >
      {isOnline ? "Save Changes" : "Waiting for Network"}
    </button>
  );
}
