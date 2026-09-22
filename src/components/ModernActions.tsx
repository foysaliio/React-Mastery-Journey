import { startTransition, useActionState, useOptimistic } from "react";

type CartAction = {
  type: "ADD" | "REMOVE";
};

async function updateCart(
  previousCount: number,
  action: CartAction,
): Promise<number> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (action.type === "ADD") {
    return previousCount + 1;
  }

  return Math.max(0, previousCount - 1);
}

export default function ModernActions() {
  const [count, dispatchAction, isPending] = useActionState(updateCart, 0);

  const [optimisticCount, setOptimisticCount] = useOptimistic(count);

  function handleAdd() {
    startTransition(() => {
      setOptimisticCount((current) => current + 1);

      dispatchAction({
        type: "ADD",
      });
    });
  }

  function handleRemove() {
    startTransition(() => {
      setOptimisticCount((current) => Math.max(0, current - 1));

      dispatchAction({
        type: "REMOVE",
      });
    });
  }

  return (
    <section className="rounded border p-6">
      <h2 className="text-2xl font-semibold">Shopping Cart</h2>

      <p className="mt-4 text-xl">
        Quantity: <strong>{optimisticCount}</strong>
      </p>

      <p className="mt-2 text-sm text-zinc-500">
        {isPending ? "Saving..." : "Saved"}
      </p>

      <div className="mt-5 flex gap-3">
        <button
          type="button"
          onClick={handleRemove}
          className="rounded border px-4 py-2"
        >
          Remove
        </button>

        <button
          type="button"
          onClick={handleAdd}
          className="rounded bg-black
            px-4 py-2 text-white"
        >
          Add
        </button>
      </div>
    </section>
  );
}
