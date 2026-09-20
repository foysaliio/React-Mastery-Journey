import AccessibleField from "./Components/AccessibleField";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <section className="mx-auto max-w-md space-y-6 rounded-xl bg-slate-900 p-6">
        <AccessibleField
          label="Email"
          hint="Enter your primary email address."
          type="email"
        />

        <AccessibleField
          label="Password"
          hint="Use at least 8 characters."
          type="password"
        />
      </section>
    </main>
  );
}

export default App;
