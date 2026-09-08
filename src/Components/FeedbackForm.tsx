import { useState } from "react";

const FeedbackForm = () => {
  const [topic, setTopic] = useState<string>("react");
  const [message, setMessage] = useState<string>("");

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Select and Textarea</h2>

      <div className="mt-6 space-y-4">
        <select
          value={topic}
          onChange={(event) => {
            setTopic(event.currentTarget.value);
          }}
          className="w-full rounded bg-slate-800 p-3"
        >
          <option value="react">React</option>
          <option value="typescript">TypeScript</option>
          <option value="tailwind">Tailwind CSS</option>
        </select>

        <textarea
          value={message}
          onChange={(event) => {
            setMessage(event.currentTarget.value);
          }}
          placeholder="Write your feedback..."
          rows={5}
          className="w-full rounded bg-slate-800 p-3"
        />
      </div>

      <div className="mt-6 space-y-2 text-slate-300">
        <p>Selected topic: {topic}</p>
        <p>Message: {message || "No feedback yet"}</p>
      </div>
    </section>
  );
};

export default FeedbackForm;
