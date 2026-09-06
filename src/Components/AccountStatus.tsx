interface AccountStatusProps {
  isLoggedIn: boolean;
  username: string;
}
const AccountStatus = ({ isLoggedIn, username }: AccountStatusProps) => {
  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">
        {isLoggedIn ? `Welcome, ${username}` : "Please log in"}
      </h2>

      <p className="mt-2 text-slate-400">
        {isLoggedIn ? "You can access your deshboard." : "Sign in to countinue"}
      </p>
    </section>
  );
};

export default AccountStatus;
