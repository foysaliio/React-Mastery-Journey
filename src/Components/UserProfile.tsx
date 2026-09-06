import { useState } from "react";

interface UserProfileState {
  name: string;
  age: number;
  city: string;
}

const UserProfile = () => {
  const [profile, setProfile] = useState<UserProfileState>({
    name: "Foysal",
    age: 24,
    city: "Dhaka",
  });

  const changeName = (): void => {
    setProfile({
      ...profile,
      name: "Foysal Hossien",
    });
  };

  const increaseAge = () => {
    setProfile({
      ...profile,
      age: profile.age + 1,
    });
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h1 className="text-3xl font-bold">User Profile</h1>

      <div className="mt-6 space-y-2">
        <p>Name: {profile.name} </p>
        <p>Age: {profile.age} </p>
        <p>City: {profile.city} </p>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={changeName}
          className="rounded bg-blue-600 px-4 py-2"
        >
          Change Name
        </button>

        <button
          type="button"
          onClick={increaseAge}
          className="rounded bg-emerald-600 px-4 py-2"
        >
          Increase Age
        </button>
      </div>
    </section>
  );
};

export default UserProfile;
