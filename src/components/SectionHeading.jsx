export default function SectionHeading({ label, title, subtitle, center = false }) {
  return (
    <div className="reveal" style={{ textAlign: center ? "center" : "left" }}>
      {label && <p className="section-label">{label}</p>}
      {title && <h2 className="section-title">{title}</h2>}
      <hr
        className="section-divider"
        style={{ margin: center ? "0 auto 24px" : "0 0 24px" }}
      />
      {subtitle && (
        <p
          className="section-subtitle"
          style={center ? { margin: "0 auto", maxWidth: "560px" } : undefined}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
