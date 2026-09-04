interface ProfileInfoProps {
  location: string;
  experience: number;
}

const ProfileInfo = ({ location, experience }: ProfileInfoProps) => {
  return (
    <div className="mt-5 space-y-2 text-slate-300">
      <p>Location: {location} </p>
      <p>Experience: {experience} years</p>
    </div>
  );
};

export default ProfileInfo;
