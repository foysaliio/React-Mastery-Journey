interface ProfileInfoProps {
  name: string;
  role: string;
}

const ProfileInfo = ({ name, role }: ProfileInfoProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-white">{name}</h2>

      <p className="mt-1 text-slate-400">{role}</p>
    </div>
  );
};

export default ProfileInfo;
