export default function App() {
  const title: string = "JSX Rules";
  const username: string = "Foysal";
  const isActive: boolean = true;

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      {/* Rule 1: JSX should  return one parent element */}
      <section className="rounded-xl bg-slate-900 p-6">
        {/* Rule 2: Use className instead of class */}
        <h1 className="text-4xl font-bold"> {title} </h1>

        {/* Rule 3: Every tag must be properly cloesed */}
        <p className="mt-4 text-slate-300">Hello, {username}</p>

        <img
          src="https://placehold.co/200"
          alt="Profile placeholder"
          className="mt-6 h-20 w-20 rounded-full"
        />

        {/* Rule 4: JavaScript expressions go inside curly braces */}
        <p className="mt-4 ">Status: {isActive ? "Active" : "Inactive"}</p>

        {/* Rule 5: JSX attributes use camelCase */}
        <button
          type="button"
          onClick={() => console.log("Button clicked")}
          className="mt-6 rounded-lg bg-blue-600 px-5 py-2 font-medium"
        >
          Click Me
        </button>
      </section>
    </main>
  );
}
