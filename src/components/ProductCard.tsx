export default function ProductCard() {
  const productName: string = "Mechanical Keyboard";
  const price: number = 4500;
  const discount: number = 500;

  // This calculation does not change anything outside the component.
  const finalPrice: number = price - discount;

  return (
    <article className="bg-slate-800 rounded-xl p-6 text-white text-center">
      <h2 className="text-2xl font-semibold">{productName}</h2>

      <p className="mt-3 text-slate-300">Regular Price: ৳{price}</p>

      <p className="text-slate-300">Discount: ৳{discount}</p>

      <p className="mt-3 text-xl font-bold text-green-400">
        Final Price: ৳{finalPrice}
      </p>
    </article>
  );
}
