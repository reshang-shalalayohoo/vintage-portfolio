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
            <a
              key={social.name}
              href={social.url}
              className="footer-social-link"
              target={social.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={social.name}
              title={social.name}
            >
              <i className={social.uicon} aria-hidden="true" />
            </a>
          ))}
        </div>
        <span className="footer-copy">© {year} {siteConfig.brand}. All rights reserved.</span>
      </div>

    </footer>
  );
}
