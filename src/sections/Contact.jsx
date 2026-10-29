import { useState, useCallback } from "react";
import SectionHeading from "../components/SectionHeading";
import { socialLinks } from "../data/portfolioData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — no backend connected
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3500);
    }, 600);
  }, []);

  const buttonLabel =
    status === "sending" ? "Sending…"
      : status === "sent" ? "✓ Message Sent!"
        : "Send Message";

  return (
    <section className="section section-contact" id="contact">
      <div className="section-inner">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <SectionHeading label="✦ GET IN TOUCH ✦" title="Send Me a Letter" />
            <p className="contact-info-text">
              Have a question, want to collaborate, or just want to say hello? I'd love to hear from you. Fill out the form and I'll get back to you as soon as I can.
            </p>
            <p className="contact-info-note">
              Note: This form is not yet connected to a backend. Connect it to an email service or API to receive real messages.
            </p>
            <div className="contact-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-link glass-2"
                  target={social.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={social.name}
                  title={social.name}
                >
                  <i className={social.uicon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <form className="contact-form glass-2-static reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
                <input className="form-input" type="text" id="contact-name" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required autoComplete="name" />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Your Email</label>
                <input className="form-input" type="email" id="contact-email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required autoComplete="email" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-subject">Subject</label>
              <input className="form-input" type="text" id="contact-subject" name="subject" placeholder="What's this about?" value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="contact-message">Your Message</label>
              <textarea className="form-textarea" id="contact-message" name="message" placeholder="Write your message here..." value={form.message} onChange={handleChange} required />
            </div>
            <button
              type="submit"
              className="form-submit btn btn-primary"
              disabled={status !== "idle"}
            >
              {buttonLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
