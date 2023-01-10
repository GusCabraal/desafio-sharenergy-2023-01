import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <Link to="/home">
        <span>Home</span>
      </Link>
      <Link to="/httpCat">
        <span>httpCat</span>
      </Link>
      <Link to="/randomDog">
        <span>randomDog</span>
      </Link>
      <Link to="/users">
        <span>Users Manager</span>
      </Link>
    </div>
  );
}
