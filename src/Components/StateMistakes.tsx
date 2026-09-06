import { useState } from "react";

type Profile = {
  name: string;
  age: number;
};

function StateMistakes() {
  const [count, setCount] = useState<number>(0);

  const [profile, setProfile] = useState<Profile>({
    name: "Foysal",
    age: 24,
  });

  const [skills, setSkills] = useState<string[]>(["HTML", "CSS"]);

  const increaseCount = (): void => {
    setCount((current) => current + 1);
  };

  const changeName = (): void => {
    setProfile({
      ...profile,
      name: "Foysal Hossien",
    });
  };

  const addSkill = (): void => {
    setSkills([...skills, "React"]);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h1 className="text-3xl font-bold">Common State Mistakes</h1>

      <div className="mt-6 space-y-3">
        <p>Count: {count}</p>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Skills: {skills.join(", ")}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={increaseCount}
          className="rounded bg-blue-600 px-4 py-2"
        >
          Increase
        </button>

        <button
          type="button"
          onClick={changeName}
          className="rounded bg-emerald-600 px-4 py-2"
        >
          Change Name
        </button>

        <button
          type="button"
          onClick={addSkill}
          className="rounded bg-violet-600 px-4 py-2"
        >
          Add React
        </button>
      </div>
    </section>
  );
}

export default StateMistakes;
