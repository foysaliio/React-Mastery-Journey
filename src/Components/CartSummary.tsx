import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

const CartSummary = () => {
  const [items] = useState<CartItem[]>([
    { id: 1, name: "Keyboard", price: 4500 },
    { id: 2, name: "Mouse", price: 2200 },
    { id: 3, name: "USB-C Hub", price: 3200 },
  ]);

  const totalItems: number = items.length;

  const totalPrice: number = items.reduce(
    (accum, item) => accum + item.price,
    0,
  );

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Cart Summary</h2>

      <div className="mt-5 space-y-2 text-slate-300">
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ৳{totalPrice}</p>
      </div>
    </section>
  );
};

export default CartSummary;
