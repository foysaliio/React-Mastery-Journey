import { useState } from "react";

const ProfileSettings = () => {
  const [name, setName] = useState<string>("Foysal");
  const [age, setAge] = useState<number>(24);
  const [isOnline, setIsOnline] = useState<boolean>(true);

  const changeName = (): void => {
    setName("Foysal Hossien");
  };

  const increaseAge = (): void => {
    setAge((current) => current + 1);
  };

  const toggleStatus = (): void => {
    setIsOnline((current) => !current);
  };

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h1 className="text-3xl font-bold">Profile Settings</h1>

      <div className="mt-6 space-y-3">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Status: {isOnline ? "Online" : "Offline"}</p>
      </div>

      <div className="mt-6 flex gap-3 flex-wrap">
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
          className="rounded bg-blue-600 px-4 py-2"
        >
          Increase Age
        </button>

        <button
          type="button"
          onClick={toggleStatus}
          className="rounded bg-blue-600 px-4 py-2"
        >
          Toggle Status
        </button>
      </div>
    </section>
  );
};

export default ProfileSettings;
