import { Link } from "react-router-dom";
import profileImg from "../assets/images/Ikenna_07.png"

export default function Home() {
  return (
    <section className="container section">
      <div className="hero">
        <p className="kicker">Junior Frontend Developer</p>
        <h1 className="hero_title">
          I build clean, responsive web apps using JavaScript and React.
        </h1>
        <p className="lead">
          I focus on clear UI, solid fundamentals, and real-world projects —
          from API-driven apps to production websites.
        </p>

        <div className="hero_actions">
          <Link className="btn" to="/projects">
            View Projects
          </Link>
        </div>

        <p className="muted">
          Based in the UK, Open to junior frontend opportunities
        </p>
        <div className="hero_imageWrap">
          <img
            className="hero_image"
            src={profileImg}
            alt="Portrait placeholder"
          />
        </div>
      </div>
    </section>
  );
}
