import Avatar from "./Avatar";
import ProfileInfo from "./ProfileInfo";

const ProfileCard = () => {
  const name: string = "Foysal";
  const role: string = "Frontend Developer";
  const imageUrl: string = "https://placehold.co/200";

  return (
    <article className="flex gap-5 items-center bg-slate-800 p-6 rounded-xl">
      <Avatar imageUrl={imageUrl} name={name} />

      <ProfileInfo name={name} role={role} />
    </article>
  );
};

export default ProfileCard;

// Mental model:

// Small Components
//      ↓
// Combine Together
//      ↓
// Bigger Component
//      ↓
// Complete UI
