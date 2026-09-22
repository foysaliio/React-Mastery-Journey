import { createContext, type Dispatch } from "react";

import type { TaskAction, TaskState } from "../types/task";

export type TaskContextValue = {
  state: TaskState;
  dispatch: Dispatch<TaskAction>;
};

export const TaskContext = createContext<TaskContextValue | null>(null);
