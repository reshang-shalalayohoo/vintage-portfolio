import SectionHeading from "../components/SectionHeading";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="section section-experience" id="experience">
      <div className="section-inner">
        <SectionHeading
          label="✦ JOURNEY ✦"
          title="A Journey Through Time"
          subtitle="Education, milestones, and experiences that shape my creative path. Replace these placeholders with your real journey."
        />
        <div className="timeline">
          {experienceData.map((item, i) => (
            <div key={i} className="timeline-item reveal">
              <div className="timeline-dot">
                <i className={item.icon} aria-hidden="true" />
              </div>
              <div className="timeline-card glass-2">
                <div className="timeline-card-header">
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-type">{item.type}</span>
                </div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
