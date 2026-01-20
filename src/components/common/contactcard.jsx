import "../styles/contactcard.css";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="contact-cta-section">
      <div className="contact-cta-card">
        <span className="cta-badge">Let’s Connect</span>

        <h2>
          Ready to build <span>Equality-Driven</span> Workplaces?
        </h2>

        <p>
          Partner with <strong>Shaurya4Equality</strong> to create safer,
          fairer, and more inclusive environments through expert guidance,
          training, and systems that work.
        </p>

        <div className="cta-actions">
          <Link to="/contact" className="cta-primary">
            Contact Us
          </Link>
          <Link to="/get-involved" className="cta-secondary">
            Get Involved
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
