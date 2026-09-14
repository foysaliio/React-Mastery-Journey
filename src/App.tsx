import ProductSection from "./Components/ProductSection";
import SearchBox from "./Components/SearchBox";

function App() {
  return (
    <main className="min-h-screen bg-slate-950 p-8">
      <div className="mx-auto max-w-xl space-y-6">
        <SearchBox />
        <ProductSection />
      </div>
    </main>
  );
}

export default App;
