export default function ProjectCard({ project }) {
  const { title, type, image, liveUrl, bullets, tech } = project; //Destructuring

  return (
    <article className="card">
      <img src={image} alt={`${title} thumbnail`} className="card_img" />

      <div className="card_content">
        <div className="card_header">
          <h3 className="card_title">{title}</h3>
          <span className="badge">{type}</span>
        </div>

        <ul className="card_list">
          {bullets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="card_tags">
          {tech.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className="card_actions">
          <a href={liveUrl} className="btn" target="_blank" rel="noreferrer">
            Live Demo
          </a>
          <a href={liveUrl} className="btn" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </article>
  );
}
