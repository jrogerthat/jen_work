import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/CV">CV</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;