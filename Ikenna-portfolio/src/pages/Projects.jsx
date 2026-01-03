import ProjectCard from "../components/ProjectCard";
import {projects} from "../data/projects";

export default function Projects() {
  return (
      <section className="container section">
        <h1>Projects</h1>
        <p className="mute">
          Below are Some projects that I've built, focusing on clean UI, JavaScript fundamentals, APIs and real world delivery
        </p>

        <div className="grid">
          {projects.map((project)=>(
            <ProjectCard key={project.title} project={project}/>
          ))}
        </div>
      </section>
  );
}
