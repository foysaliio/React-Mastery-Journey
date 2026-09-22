import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Count: {count}</h2>

      <button type="button" onClick={() => setCount((current) => current + 1)}>
        Increment
      </button>
    </section>
  );
}
