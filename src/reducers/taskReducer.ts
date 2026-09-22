import type { Task, TaskAction, TaskState } from "../types/task";

export const initialTaskState: TaskState = {
  tasks: [],
};

export function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case "TASK_ADDED": {
      const newTask: Task = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };

      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    }

    case "TASK_TOGGLED":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? {
                ...task,
                completed: !task.completed,
              }
            : task,
        ),
      };

    case "TASK_DELETED":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload.id),
      };

    default:
      return state;
  }
}
