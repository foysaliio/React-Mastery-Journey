import { useState } from "react";

type UserProfile = {
  name: string;
  email: string;
  role: string;
};

function UserProfileForm() {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    role: "student",
  });

  const updateName = (value: string): void => {
    setProfile({
      ...profile,
      name: value,
    });
  };

  const updateEmail = (value: string): void => {
    setProfile({
      ...profile,
      email: value,
    });
  };

  const updateRole = (value: string): void => {
    setProfile({
      ...profile,
      role: value,
    });
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">User Profile</h2>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          value={profile.name}
          onChange={(event) => updateName(event.currentTarget.value)}
          placeholder="Name"
          className="w-full rounded bg-slate-800 p-3"
        />

        <input
          type="email"
          value={profile.email}
          onChange={(event) => updateEmail(event.currentTarget.value)}
          placeholder="Email"
          className="w-full rounded bg-slate-800 p-3"
        />

        <select
          value={profile.role}
          onChange={(event) => updateRole(event.currentTarget.value)}
          className="w-full rounded bg-slate-800 p-3"
        >
          <option value="student">Student</option>
          <option value="developer">Developer</option>
        </select>
      </div>
    </section>
  );
}

export default UserProfileForm;
