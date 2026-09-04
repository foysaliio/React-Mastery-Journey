import EventButton from "./components/EventButton";

const App = () => {
  const HandleClick = (): void => {
    alert("Button clicked!");
  };

  const handleGreeting = (): void => {
    alert("Welcome to React");
  };

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <h1 className="text-4xl font-bold">React Event Handling</h1>

      <p className="mt-3 text-slate-400">
        React can respond to user interactions.
      </p>

      <div className="mt-8 flex gap-4">
        <EventButton label="Click Me" onClick={HandleClick} />

        <EventButton label="Say Hello" onClick={handleGreeting} />
      </div>
    </main>
  );
};

export default App;
