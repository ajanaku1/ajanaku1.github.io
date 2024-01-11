import { projects } from "./projects";

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h3>PORTFOLIO</h3>
      {projects.map((project, index) => (
        <div key={index} className="portfolio-item">
          <div className="item-description">
            <h4>{project.name}</h4>
            <p>{project.desc}</p>
          </div>
          <div className="item-container">
            <a href={project.link}>
              <img src={project.src} alt={project.alt} />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
