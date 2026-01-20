import '../styles/contactpg.css';
const About = () => {
  return (
    <>
     <section className="contact-modern">

      {/* Intro */}
      <div className="contact-modern-intro">
        <h1>Let’s Start a Conversation...</h1>
        <p>
          Whether you’re an organization, institution, or individual,
          we’d love to hear from you and explore how we can work together
          toward equality and dignity.
        </p>
      </div>

      {/* Content */}
      <div className="contact-modern-grid">

        {/* Left: Action Cards */}
        <div className="contact-action-panel">

          <div className="contact-action-card">
            <span className="action-label">Email Us</span>
            <h3>General Enquiries</h3>
            <p>Reach out for information, collaborations, or support.</p>
            <a href="mailto:contact@shaurya4equality.org">
              contact@shaurya4equality.org
            </a>
          </div>

          <div className="contact-action-card">
            <span className="action-label">WhatsApp</span>
            <h3>Quick Conversations</h3>
            <p>For faster coordination and discussions.</p>
            <a href="#">+91 9XXXXXXXXX</a>
          </div>

          <div className="contact-action-card highlight">
            <span className="action-label">Partnerships</span>
            <h4>Work With Us</h4>
            <p>
              Corporate programs, training, advisory, or long-term
              partnerships.
            </p>
          </div>

        </div>

        {/* Right: Message Composer */}
        <div className="contact-message-panel">
          <h2>Send Us a Message</h2>

          <div className="contact-input-group">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
          </div>

          <textarea
            className="contact-message-box"
            placeholder="Tell us what you’re looking for..."
          ></textarea>

          <button className="contact-send-btn">
            Send Message
          </button>
        </div>

      </div>
    </section>
    </>
  );
};

export default About;
