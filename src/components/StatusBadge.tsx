type StatusBadgeProps = {
  text: string;
};

const StatusBadge = ({ text }: StatusBadgeProps) => {
  return (
    <span className="rounded-full bg-green-600 px-3 py-1 text-sm font-medium text-white">
      {text}
    </span>
  );
};

export default StatusBadge;
