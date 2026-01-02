import { NavLink } from "react-router-dom";

const linkStyle = ({isActive})=>({
  textDecoration:"none",
  fontWeight: isActive ? 700 : 500,
})

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav_inner">
        <NavLink to="/" className="logo" >
          Ike Agu
        </NavLink>

        <nav className="nav_links">
          <NavLink to="/about" style={linkStyle}>
            About
          </NavLink>
          <NavLink to="/projects" style={linkStyle}>
            Projects
          </NavLink>
          <NavLink to="/skills" style={linkStyle}>
            Skills
          </NavLink>
          <NavLink to="/contact" style={linkStyle}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
