import { useContext } from "react";

import { TaskContext } from "../context/TaskContext";

export default function TaskList() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("TaskList must be used inside TaskProvider.");
  }

  const { state, dispatch } = context;

  if (state.tasks.length === 0) {
    return <p className="mt-8 text-zinc-500">No tasks yet.</p>;
  }

  return (
    <div className="mt-8 space-y-3">
      {state.tasks.map((task) => (
        <article
          key={task.id}
          className="flex items-center
            justify-between rounded
            border p-4"
        >
          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "TASK_TOGGLED",
                payload: {
                  id: task.id,
                },
              })
            }
            className={task.completed ? "line-through opacity-50" : ""}
          >
            {task.title}
          </button>

          <button
            type="button"
            onClick={() =>
              dispatch({
                type: "TASK_DELETED",
                payload: {
                  id: task.id,
                },
              })
            }
            className="text-sm text-red-600"
          >
            Delete
          </button>
        </article>
      ))}
    </div>
  );
}
