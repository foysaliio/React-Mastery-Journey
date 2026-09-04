interface UserDetailsProps {
  email: string;
  country: string;
}

const UserDetails = ({ email, country }: UserDetailsProps) => {
  return (
    <div className="mt-4 space-y-2 text-slate-300">
      <p>Email: {email} </p>
      <p>Country: {country} </p>
    </div>
  );
};

export default UserDetails;
