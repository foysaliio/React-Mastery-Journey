import { useReducer, type ReactNode } from "react";

import { TaskContext } from "./TaskContext";

import { initialTaskState, taskReducer } from "../reducers/taskReducer";

type TaskProviderProps = {
  children: ReactNode;
};

export default function TaskProvider({ children }: TaskProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  return (
    <TaskContext
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TaskContext>
  );
}
