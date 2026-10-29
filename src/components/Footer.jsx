import { siteConfig, socialLinks } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-brand">{siteConfig.brand}<span>.</span></span>
          <span className="footer-tagline">{siteConfig.footerTagline}</span>
        </div>
        <div className="footer-socials">
          {socialLinks.map((social) => (
            <a key={social.name} href={social.url} className="footer-social-link" target="_blank" rel="noopener noreferrer" aria-label={social.name}>
              <svg width="16" height="16"><use href={`/icons.svg#${social.icon}`} /></svg>
            </a>
          ))}
        </div>
        <span className="footer-copy">© {year} {siteConfig.brand}. All rights reserved.</span>
      </div>
    </footer>
  );
}
