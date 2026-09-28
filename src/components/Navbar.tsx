import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">WHO</Link>
      <Link to="/What">WHAT</Link>
      <Link to="/Where">WHERE</Link>
    </nav>
  );
}

export default Navbar;