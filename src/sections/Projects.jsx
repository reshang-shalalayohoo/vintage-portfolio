import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { projectsData } from "../data/portfolioData";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", ...new Set(projectsData.map((p) => p.category))];
  const filtered = filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);

  return (
    <section className="section" id="projects">
      <div className="section-inner">
        <SectionHeading
          label="✦ PORTFOLIO ✦"
          title="The Collection"
          subtitle="A curated selection of projects — replace these placeholders with your real work."
        />
        <div className="projects-filters reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn${filter === cat ? " active" : ""}`}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filtered.map((project) => (
            <article key={project.id} className="glass-2 project-card reveal">
              <div className="project-card-image-wrapper">
                <div className="project-card-placeholder">
                  <span className="placeholder-icon">🖼️</span>
                  <span className="placeholder-text">Project Image</span>
                </div>
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-card-link" aria-label={`View ${project.title}`}>
                  View Project <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
