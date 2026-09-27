import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Who</Link>
      <Link to="/Projects">What</Link>
      <Link to="/Where">Where</Link>
    </nav>
  );
}

export default Navbar;