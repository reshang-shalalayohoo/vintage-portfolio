import { siteConfig, navLinks } from "../data/portfolioData";
import ThemeToggle from "./ThemeToggle";

export default function Hero() {
  return (
    <section className="landing" id="home">
      <header className="hero-navbar">
        <a className="hero-brand" href="#home">
          {siteConfig.brand}<span>.</span>
        </a>
        <div className="hero-navbar-right">
          <nav className="hero-nav" aria-label="Hero navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <div className="hero-content">
        <div className="hero-center">
          <p className="hero-eyebrow">{siteConfig.eyebrow}</p>
          <h1 className="hero-heading">
            {siteConfig.heroHeading}<br />
            <span className="hero-name-highlight">{siteConfig.heroName}</span>
          </h1>
          <p className="hero-subtitle-text">{siteConfig.heroSubtitle}</p>
          <p className="hero-description">{siteConfig.description}</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore My Works <span className="btn-arrow">→</span>
            </a>
            <a href="#about" className="btn btn-secondary">
              Get to Know Me
            </a>
          </div>

          {/* Creative-interest card — below the welcome content */}
          <div className="hero-accent-card glass-2">
            <p className="accent-card-label">Currently Exploring</p>
            <p className="accent-card-value">Digital Art &amp; Realism</p>
            <div className="accent-card-divider" />
            <p className="accent-card-label">Crafting With</p>
            <p className="accent-card-value">Code, Pencil &amp; Clay</p>
          </div>
        </div>
      </div>

      <footer className="hero-footer">
        <span>{siteConfig.footerTagline}</span>
        <span>{siteConfig.established}</span>
      </footer>

      <div className="scroll-indicator" aria-hidden="true">
        <span>SCROLL</span>
        <div className="scroll-indicator-line" />
      </div>
    </section>
  );
}
