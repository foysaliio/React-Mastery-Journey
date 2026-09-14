type ProfileEditorProps = {
  name: string;
  onNameChange: (value: string) => void;
};

function ProfileEditor({ name, onNameChange }: ProfileEditorProps) {
  return (
    <input
      type="text"
      value={name}
      onChange={(event) => onNameChange(event.currentTarget.value)}
      placeholder="Enter your name"
      className="w-full rounded bg-slate-800 p-3 text-white"
    />
  );
}

export default ProfileEditor;
