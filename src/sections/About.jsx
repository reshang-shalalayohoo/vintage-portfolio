import SectionHeading from "../components/SectionHeading";
import { aboutData } from "../data/portfolioData";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div className="about-text">
            <SectionHeading label="✦ ABOUT ME ✦" title={aboutData.heading} />
            <div className="about-name-intro reveal">
              <span className="about-hi">Hi, I'm </span>
              <span className="about-name-gold">{aboutData.name}</span>
            </div>
            {aboutData.bio.map((paragraph, i) => (
              <p key={i} className="about-bio reveal">{paragraph}</p>
            ))}
            <div className="about-interests reveal">
              <p className="about-interests-label">What I Love Creating</p>
              <div className="about-interests-grid">
                {aboutData.interests.map((item) => (
                  <div key={item.label} className="interest-chip glass-2">
                    <span className="interest-icon">{item.icon}</span>
                    <span className="interest-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="about-portrait reveal">
            <div className="polaroid-frame">
              <div className="polaroid-image">
                <img
                  src={aboutData.portrait}
                  alt={`Portrait of ${aboutData.name}`}
                  loading="lazy"
                  onError={(e) => { e.target.style.display = "none"; }}
                />
              </div>
              <p className="polaroid-caption">{aboutData.name}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
