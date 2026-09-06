interface Skill {
  id: number;
  name: string;
}

const SkillList = () => {
  const skills: Skill[] = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "TypeScript" },
    { id: 5, name: "Tailwind CSS" },
    { id: 5, name: "React JS" },
  ];

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Skills</h2>

      <ul className="mt-5 space-y-2">
        {skills.map((skill) => (
          <li key={skill.id} className="rounded bg-slate-800 px-4 py-2">
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillList;
