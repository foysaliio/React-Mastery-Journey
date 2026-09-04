interface ProfileHeaderProps {
  name: string;
  role: string;
}

const ProfileHeader = ({ name, role }: ProfileHeaderProps) => {
  return (
    <header className="">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="mt-1 text-slate-400">{role}</p>
    </header>
  );
};

export default ProfileHeader;
