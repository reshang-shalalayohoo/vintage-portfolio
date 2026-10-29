import SectionHeading from "../components/SectionHeading";
import { processSteps } from "../data/portfolioData";

export default function CreativeProcess() {
  return (
    <section className="section" id="process">
      <div className="section-inner">
        <SectionHeading
          label="✦ WORKFLOW ✦"
          title="Behind the Canvas"
          subtitle="From the first spark of inspiration to the final brushstroke — a glimpse into how ideas become art."
        />
        <div className="process-timeline">
          {processSteps.map((step, i) => (
            <div key={step.step} className={`process-step reveal${i % 2 === 1 ? " process-step-alt" : ""}`}>
              <div className="process-step-number">{step.step}</div>
              <div className="process-step-content glass-2">
                <div className="process-step-icon">{step.icon}</div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
