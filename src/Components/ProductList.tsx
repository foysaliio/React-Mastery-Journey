interface Product {
  id: string;
  name: string;
  price: number;
}

const ProductList = () => {
  const products: Product[] = [
    {
      id: "prd-101",
      name: "Mechanical Keyboard",
      price: 4500,
    },
    {
      id: "prd-102",
      name: "Wireless Mouse",
      price: 2200,
    },
    {
      id: "prd-103",
      name: "USB-C Hub",
      price: 3200,
    },
  ];

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Products</h2>

      <div className="mt-5 space-y-2">
        {products.map((product) => (
          <article key={product.id} className="rounded bg-slate-800 p-4">
            <h3 className="font-semibold">{product.name}</h3>

            <p className="mt-1 text-slate-400">৳{product.price}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
