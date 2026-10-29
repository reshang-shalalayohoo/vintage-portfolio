import { useState, useCallback } from "react";
import SectionHeading from "../components/SectionHeading";
import { projectsData } from "../data/portfolioData";

const ITEMS_PER_PAGE = 3;

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["all", ...new Set(projectsData.map((p) => p.category))];
  const filtered = filter === "all" ? projectsData : projectsData.filter((p) => p.category === filter);
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleFilter = useCallback((cat) => {
    setFilter(cat);
    setCurrentPage(1);
  }, []);

  const goToPage = useCallback((page) => {
    setCurrentPage(page);
    // Scroll to projects section top
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section className="section section-projects" id="projects">
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
              onClick={() => handleFilter(cat)}
              aria-pressed={filter === cat}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {paginated.map((project) => (
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

        {/* Pagination */}
        {totalPages > 1 && (
          <nav className="pagination reveal" aria-label="Project pages">
            <button
              className="page-btn page-btn-arrow"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`page-btn${page === currentPage ? " active" : ""}`}
                onClick={() => goToPage(page)}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </button>
            ))}
            <button
              className="page-btn page-btn-arrow"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              →
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
