import weatherScreenshot from "../assets/projects/whatever-the-weather.jpg";
import stickerTrackerScreenshot from "../assets/projects/world-cup-sticker-tracker.jpg";

const projects = [
  {
    title: "Whatever the Weather",
    description:
      "A responsive weather application combining live weather data with dynamic city imagery.",
    technologies: ["React", "TypeScript", "Vite", "OpenWeather API"],
    status: "Featured",
    image: weatherScreenshot,
    github: "https://github.com/royarnold230579/whatever-the-weather",
    live: "https://weather.royarnold.co.uk",
  },
  {
    title: "2026 World Cup Sticker Tracker",
    description:
      "An interactive sticker collection tracker with progress tracking, missing stickers, duplicate swaps and localStorage persistence.",
    technologies: ["Vue 3", "TypeScript", "Tailwind CSS", "LocalStorage"],
    status: "Featured",
    image: stickerTrackerScreenshot,
    github: "https://github.com/royarnold230579/world-cup-sticker-tracker",
    live: "https://stickers.royarnold.co.uk",
  },
  {
    title: "FLICCS",
    description:
      "A movie discovery application for exploring films and finding something new to watch.",
    technologies: ["React", "TypeScript"],
    status: "In Development",
    github: "",
    live: "",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            {project.image && (
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="project-image"
              />
            )}
            <span
              className={`project-status ${project.status
                .toLowerCase()
                .replaceAll(" ", "-")}`}>
              {project.status}
            </span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link project-link-secondary">
                  GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link project-link-primary">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
