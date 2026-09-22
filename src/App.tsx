import Tabs from "./components/Tabs";

export default function App() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-3xl font-bold">Compound Components</h1>

      <div className="mt-8">
        <Tabs defaultValue="profile">
          <Tabs.List>
            <Tabs.Trigger value="profile">Profile</Tabs.Trigger>

            <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="profile">
            <h2 className="text-xl font-semibold">Profile</h2>

            <p className="mt-2 text-zinc-600">
              Manage your profile information.
            </p>
          </Tabs.Content>

          <Tabs.Content value="settings">
            <h2 className="text-xl font-semibold">Settings</h2>

            <p className="mt-2 text-zinc-600">Manage application settings.</p>
          </Tabs.Content>
        </Tabs>
      </div>
    </main>
  );
}
