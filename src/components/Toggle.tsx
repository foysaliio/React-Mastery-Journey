type ToggleProps = {
  checked: boolean;
  onChange: (nextValue: boolean) => void;
};

export default function Toggle({ checked, onChange }: ToggleProps) {
  function handleToggle() {
    onChange(!checked);
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="rounded border px-5 py-3"
    >
      {checked ? "Enabled" : "Disabled"}
    </button>
  );
}
