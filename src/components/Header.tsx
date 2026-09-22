import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const user = useContext(UserContext);

  if (!user) {
    return null;
  }

  return (
    <header className="rounded border p-4">
      <p className="font-semibold">Welcome, {user.name}</p>
    </header>
  );
};

export default Header;
