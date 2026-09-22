import { useContext, useState, type FormEvent } from "react";

import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");

  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("TaskForm must be used inside TaskProvider.");
  }

  const { dispatch } = context;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    dispatch({
      type: "TASK_ADDED",
      payload: {
        title: trimmedTitle,
      },
    });

    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex gap-3">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Add a task"
        className="flex-1 rounded border p-3"
      />

      <button type="submit" className="rounded bg-black px-5 py-3 text-white">
        Add
      </button>
    </form>
  );
}
