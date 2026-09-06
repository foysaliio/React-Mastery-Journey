import { useState } from "react";

const SkillsList = () => {
  const [skills, setSkills] = useState<string[]>(["HTML", "CSS", "JavaScript"]);

  const addSkill = (): void => {
    setSkills([...skills, "React"]);
  };

  const removeSkill = (): void => {
    setSkills(skills.filter((skill) => skill !== "CSS"));
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h1 className="text-3xl font-bold">Skills</h1>

      <ul className="mt-6 space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="bg-slate-800 rounded px-4 py-2">
            {skill}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={addSkill}
          className="rounded bg-blue-600 px-4 py-2"
        >
          Add React
        </button>

        <button
          type="button"
          onClick={removeSkill}
          className="rounded bg-red-600 px-4 py-2"
        >
          Remove CSS
        </button>
      </div>
    </section>
  );
};

export default SkillsList;
