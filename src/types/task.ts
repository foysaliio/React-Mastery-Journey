export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskState = {
  tasks: Task[];
};

export type TaskAction =
  | {
      type: "TASK_ADDED";
      payload: {
        title: string;
      };
    }
  | {
      type: "TASK_TOGGLED";
      payload: {
        id: number;
      };
    }
  | {
      type: "TASK_DELETED";
      payload: {
        id: number;
      };
    };
