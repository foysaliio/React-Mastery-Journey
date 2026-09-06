interface Todo {
  id: number;
  title: string;
}

const TodoItems = () => {
  const todos: Todo[] = [
    { id: 11, title: "Learn React" },
    { id: 12, title: "Reactice TypeScript" },
    { id: 13, title: "Build a Project" },
  ];
  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Todo Items</h2>

      <ul className="mt-5 space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="rounded bg-slate-800 px-4 py-2">
            {todo.title}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoItems;
