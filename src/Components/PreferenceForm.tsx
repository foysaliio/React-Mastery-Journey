import { useState } from "react";

const PreferenceForm = () => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [role, setRole] = useState<string>("student");

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Checkbox and Radio</h2>

      <label className="mt-6 flex items-center gap-3">
        <input
          type="checkbox"
          checked={isSubscribed}
          onChange={(event) => {
            setIsSubscribed(event.currentTarget.checked);
          }}
        />
        Subscribe to updates
      </label>

      <div className="mt-6 space-y-3">
        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="role"
            value="student"
            checked={role === "student"}
            onChange={(event) => {
              setRole(event.currentTarget.value);
            }}
          />
          Student
        </label>

        <label className="flex items-center gap-3">
          <input
            type="radio"
            name="role"
            value="developer"
            checked={role === "developer"}
            onChange={(event) => {
              setRole(event.currentTarget.value);
            }}
          />
          Developer
        </label>
      </div>

      <div className="mt-6 text-slate-300">
        <p>Subscribed: {isSubscribed ? "Yes" : "No"}</p>
        <p>Selected role: {role}</p>
      </div>
    </section>
  );
};

export default PreferenceForm;
