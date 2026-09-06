import NotificationPanel from "./Components/NotificationPanel";

function App() {
  const hasNotifications: boolean = true;
  const count: number = 3;

  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <NotificationPanel hasNotifications={hasNotifications} count={count} />
    </main>
  );
}

export default App;
