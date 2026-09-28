import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isStuck ? "navbar-shell stuck" : "navbar-shell"}>
      <nav className="navbar">
        <Link to="/">WHO</Link>
        <Link to="/what">WHAT</Link>
        <Link to="/where">WHERE</Link>
      </nav>
    </div>
  );
}

export default Navbar;