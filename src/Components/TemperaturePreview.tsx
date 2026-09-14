interface TemperaturePreviewProps {
  temperature: number;
}

const TemperaturePreview = ({ temperature }: TemperaturePreviewProps) => {
  const status: string = temperature >= 30 ? "Hot" : "Comfortable";

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Temperature Preview</h2>

      <p className="mt-4">Temperature: {temperature}°C</p>
      <p className="mt-2 text-slate-300">Status: {status}</p>
    </section>
  );
};

export default TemperaturePreview;
