interface TemperatureInputProps {
  temperature: number;
  onTemperatureChange: (value: number) => void;
}

const TemperatureInput = ({
  temperature,
  onTemperatureChange,
}: TemperatureInputProps) => {
  return (
    <input
      type="number"
      value={temperature}
      onChange={(event) =>
        onTemperatureChange(Number(event.currentTarget.value))
      }
      className="w-full rounded bg-slate-800 p-3 text-white"
    />
  );
};

export default TemperatureInput;
