interface HeaderProps {
  user: {
    name: string;
    role: string;
  };
}

const Header = ({ user }: HeaderProps) => {
  return (
    <header className="rounded border p-4">
      <p className="font-semibold">Welcome, {user.name}</p>
    </header>
  );
};

export default Header;
