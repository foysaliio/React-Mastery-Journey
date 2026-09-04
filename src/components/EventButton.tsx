interface EventButtonProps {
  label: string;
  onClick: () => void;
}

const EventButton = ({ label, onClick }: EventButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

export default EventButton;
