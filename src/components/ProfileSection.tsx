import ProfileCard from "./ProfileCard";

function ProfileSection() {
  return (
    <section className="grid gap-4 p-5 md:grid-cols-2">
      <ProfileCard />
      <ProfileCard />
    </section>
  );
}

export default ProfileSection;
