interface UserStatusProps {
  isLoggedIn: boolean;
  username: string;
}

const UserStatus = ({ isLoggedIn, username }: UserStatusProps) => {
  if (isLoggedIn) {
    return (
      <section className="rounded-xl bg-slate-900 p-6 text-white">
        <h2 className="text-2xl font-bold">Welcome, {username}</h2>

        <p className="mt-2 text-slate-400">You are currently logged in.</p>
      </section>
    );
  }

  return (
    <section className="rounded-xl bg-slate-900 p-6 text-white">
      <h2 className="text-2xl font-bold">Please log in</h2>

      <p className="mt-2 text-slate-400">You need an account to countinue!</p>
    </section>
  );
};

export default UserStatus;
