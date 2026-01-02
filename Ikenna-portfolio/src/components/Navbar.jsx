import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav_inner">
        <NavLink to="/" className="logo">
          Ike Agu
        </NavLink>

        <nav className="na_links">
          <NavLink to="/about">
            About
          </NavLink>
          <NavLink to="/projects">
            Projects
          </NavLink>
          <NavLink to="/skills">
            Skills
          </NavLink>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
