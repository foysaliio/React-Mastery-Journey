import type {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  SubmitEvent,
} from "react";

function EventPlayground() {
  const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
    console.log(event.currentTarget.textContent);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    console.log(event.currentTarget.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    console.log(event.key);
  };

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section className="max-w-xl p-6 text-white">
      <h1 className="text-3xl font-bold">React Event Types</h1>

      <button
        type="button"
        onClick={handleClick}
        className="mt-6 rounded-lg bg-blue-600 px-5 py-2"
      >
        Click Me
      </button>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Type something..."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full rounded-lg bg-slate-800 p-3"
        />

        <button type="submit" className="rounded-lg bg-emerald-600 px-5 py-2">
          Submit
        </button>
      </form>
    </section>
  );
}

export default EventPlayground;
