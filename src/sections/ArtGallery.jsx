import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Lightbox from "../components/Lightbox";
import { galleryData } from "../data/portfolioData";

export default function ArtGallery() {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);
  const categories = ["all", ...new Set(galleryData.map((g) => g.category))];
  const filtered = filter === "all" ? galleryData : galleryData.filter((g) => g.category === filter);

  return (
    <section className="section section-gallery" id="gallery">
      <div className="section-inner">
        <SectionHeading
          label="✦ GALLERY ✦"
          title="The Art Archives"
          subtitle="A visual journey through artworks, drawings, sculptures, and creative experiments."
        />
        <div className="gallery-filters reveal">
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
        <div className="gallery-grid">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="gallery-item reveal"
              onClick={() => setLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setLightbox(item)}
              aria-label={`Open ${item.title}`}
            >
              <div className="gallery-placeholder">
                <span className="placeholder-icon">🎨</span>
                <span className="placeholder-text">{item.title}</span>
              </div>
              <div className="gallery-item-overlay">
                <span className="gallery-item-title">{item.title}</span>
                <span className="gallery-item-category">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <Lightbox
          image={lightbox.image}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
