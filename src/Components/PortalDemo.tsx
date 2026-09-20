import { useState } from "react";
import { createPortal } from "react-dom";

function PortalDemo() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">React Portals</h2>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-4 rounded bg-blue-600 px-4 py-2"
      >
        Open Overlay
      </button>

      {isOpen &&
        createPortal(
          <div className="fixed inset-0 flex items-center justify-center bg-black/70">
            <div className="rounded-xl bg-white p-6 text-slate-900">
              <h3 className="text-xl font-bold">Portal Content</h3>

              <p className="mt-3">
                This UI is rendered outside the normal DOM position.
              </p>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded bg-red-600 px-4 py-2 text-white"
              >
                Close
              </button>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}

export default PortalDemo;
