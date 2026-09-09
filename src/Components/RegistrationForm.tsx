import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  role: string;
}

const RegistrationForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    role: "student",
  });

  const handleNameChange = (value: string): void => {
    setForm({
      ...form,
      name: value,
    });
  };

  const handleEmailChange = (value: string): void => {
    setForm({
      ...form,
      email: value,
    });
  };

  const handleRoleChange = (value: string): void => {
    setForm({
      ...form,
      role: value,
    });
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Registration Form</h2>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          value={form.name}
          onChange={(event) => {
            handleNameChange(event.currentTarget.value);
          }}
          placeholder="Name"
          className="w-full rounded bg-slate-800 p-3"
        />

        <input
          type="email"
          value={form.email}
          onChange={(event) => {
            handleEmailChange(event.currentTarget.value);
          }}
          placeholder="Email"
          className="w-full rounded bg-slate-800 p-3"
        />

        <select
          value={form.role}
          onChange={(event) => {
            handleRoleChange(event.currentTarget.value);
          }}
          className="w-full rounded bg-slate-800 p-3"
        >
          <option value="student">Student</option>
          <option value="developer">Developer</option>
        </select>
      </div>

      <div className="mt-6 space-y-2 text-slate-300">
        <p>Name: {form.name || "Not provided"} </p>
        <p>Email: {form.email || "Not provided"} </p>
        <p>Role: {form.role} </p>
      </div>
    </section>
  );
};

export default RegistrationForm;
