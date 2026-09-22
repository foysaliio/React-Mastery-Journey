import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
};

export default function Card({ title, children, footer }: CardProps) {
  return (
    <section className="rounded-xl border p-5">
      <h2 className="text-xl font-semibold">{title}</h2>

      <div className="mt-4">{children}</div>

      {footer && <footer className="mt-5 border-t pt-4">{footer}</footer>}
    </section>
  );
}
