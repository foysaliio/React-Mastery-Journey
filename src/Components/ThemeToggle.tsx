type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded bg-blue-600 px-4 py-2 text-white"
    >
      {isDark ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
}

export default ThemeToggle;
