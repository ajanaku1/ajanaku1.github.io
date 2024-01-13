import { projects } from "./projects";

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h3 className="section_heading">PORTFOLIO</h3>
      {projects.map((project, index) => (
        <div key={index} className="portfolio-item">
          <div className="item-description">
            <h4 className="subheading">{project.name}</h4>
            <p className="write_up">{project.desc}</p>
          </div>
          <div className="item-container">
            <img
              src={project.src}
              alt={project.alt}
              onClick={() => window.open(project.link)}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Portfolio;
