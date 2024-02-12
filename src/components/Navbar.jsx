import { Link } from "react-router-dom";
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="nav">
      <h3>Career Explora</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/explore">explore</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
