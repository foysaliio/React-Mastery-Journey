import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

const ProfileCard = () => {
  return (
    <article className="max-w-md rounded-xl bg-slate-800 p-6 text-white">
      <ProfileHeader name="Foysal" role="Frontend Developer" />

      <ProfileInfo location="Dhaka, Bangladesh" experience={3} />

      <button
        className="mt-6 rounded-lg bg-blue-600 px-4 py-2 font-medium"
        type="button"
      >
        View Profile
      </button>
    </article>
  );
};

export default ProfileCard;
