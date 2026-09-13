interface NameInputProps {
  name: string;
  onNameChange: (value: string) => void;
}

const NameInput = ({ name, onNameChange }: NameInputProps) => {
  return (
    <input
      type="text"
      value={name}
      onChange={(event) => onNameChange(event.currentTarget.value)}
      placeholder="Enter your name"
      className="w-full rounded bg-slate-800 p-3 text-white"
    />
  );
};

export default NameInput;
