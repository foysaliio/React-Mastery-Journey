import { useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Practice", completed: true },
  ]);

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h1 className="text-3xl font-bold">Todo List</h1>

      <div className="mt-6 space-y-3">
        {todos.map((todo) => (
          <button
            key={todo.id}
            type="button"
            onClick={() => toggleTodo(todo.id)}
            className="block w-full rounded bg-slate-800 p-4 text-left"
          >
            {todo.completed ? "✅" : "⬜"} {todo.title}
          </button>
        ))}
      </div>
    </section>
  );
};

export default TodoList;
