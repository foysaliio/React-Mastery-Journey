import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";

const ProfileCard = () => {
  const name: string = "Foysal";
  const role: string = "Frontend Developer";
  const location: string = "Bangladesh";
  const experience: number = 3;

  return (
    <article className="max-w-md rounded-xl bg-slate-800 p-6 text-white">
      {/* ProfileCard is the parent of these components */}
      <ProfileHeader name={name} role={role} />

      <ProfileInfo location={location} experience={experience} />
    </article>
  );
};

export default ProfileCard;
