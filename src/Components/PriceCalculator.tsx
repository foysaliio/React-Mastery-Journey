import { useState } from "react";

function PriceCalculator() {
  const [price, setPrice] = useState<number>(100);
  const [quantity, setQuantity] = useState<number>(1);

  const total: number = price * quantity;

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Price Calculator</h2>

      <div className="mt-6 space-y-4">
        <input
          type="number"
          value={price}
          onChange={(event) => setPrice(Number(event.currentTarget.value))}
          className="w-full rounded bg-slate-800 p-3"
        />

        <input
          type="number"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.currentTarget.value))}
          className="w-full rounded bg-slate-800 p-3"
        />
      </div>

      <p className="mt-6 text-lg">Total: ${total}</p>
    </section>
  );
}

export default PriceCalculator;
