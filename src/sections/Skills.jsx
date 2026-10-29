import SectionHeading from "../components/SectionHeading";
import { skillsData } from "../data/portfolioData";

function SkillItem({ skill }) {
  return (
    <div className="skill-item glass-2">
      <div className="skill-icon">{skill.icon}</div>
      <div className="skill-info">
        <div className="skill-name">{skill.name}</div>
        <div className="skill-bar-track">
          <div
            className="skill-bar-fill"
            style={{ "--skill-level": `${skill.level}%`, width: `${skill.level}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-inner">
        <SectionHeading
          label="✦ EXPERTISE ✦"
          title="The Artist's Toolbox"
          subtitle="A blend of creative vision and technical proficiency — from pencil and clay to code and design."
        />
        <div className="skills-grid">
          <div className="reveal">
            <h3 className="skills-column-title">✦ Creative Skills</h3>
            {skillsData.creative.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
          <div className="reveal">
            <h3 className="skills-column-title">✦ Technical Skills</h3>
            {skillsData.technical.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
