import { Link } from "react-router-dom";
export default function About() {
  return (
    <section className="container">
      <h1>About Page</h1>
      <p className="lead">
        I'm Ikenna, a junior frontend developer who enjoys building clean,
        user-friendly interfaces and turning ideas into working web apps.
      </p>
      <div className="about">
        <div className="about_block">
          <h2 className="h2">What I do</h2>
          <p className="muted">
            I build responsive websites and JavaScript applications, often
            working with APIs and dynamic UI rendering. I care about readable
            code, accessibility basics, and a smooth user experience.
          </p>
        </div>

        <div className="about_block">
          <h2 className="h2">Currently focused on</h2>
          <ul className="clean-list">
            <li>Strengthening JavaScript and React fundamentals</li>
            <li>Building projects that reflect real product requirements</li>
            <li>
              Writing cleaner code through refactoring and reusable components
            </li>
            <li>Improving accessibility and responsive layout skills</li>
          </ul>
        </div>
      </div>

      <div className="callout">
        <h2 className="h2">Highlights</h2>
        <ul className="clean-list">
          <li>Built multiple Vanilla JavaScript projects (APIs, forms, date logic)</li>
          <li>Delivered a live React website for a charity organization</li>
          <li>Comfortable collaborating and working as part of a team</li>
        </ul>
      </div>

      <div className="callout_actions">
        <Link className="btn" to="/projects">
          View projects
        </Link>
      </div>
    </section>
  );
}
