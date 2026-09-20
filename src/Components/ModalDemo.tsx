import { useState } from "react";
import Modal from "./Modal";

function ModalDemo() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h1 className="text-2xl font-bold">Modal Architecture</h1>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-4 rounded bg-blue-600 px-4 py-2"
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-2xl font-bold">Confirm Action</h2>

        <p className="mt-3 text-slate-600">
          This content is passed through children.
        </p>

        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="mt-5 rounded bg-red-600 px-4 py-2 text-white"
        >
          Close
        </button>
      </Modal>
    </section>
  );
}

export default ModalDemo;
