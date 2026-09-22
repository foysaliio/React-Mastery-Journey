import TaskForm from "./components/TaskForm";

import TaskList from "./components/TaskList";

import TaskProvider from "./context/TaskProvider";

export default function App() {
  return (
    <TaskProvider>
      <main className="mx-auto max-w-xl p-8">
        <h1 className="text-3xl font-bold">Task Manager</h1>

        <TaskForm />

        <TaskList />
      </main>
    </TaskProvider>
  );
}
