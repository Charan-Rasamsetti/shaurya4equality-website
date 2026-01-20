import "../styles/getinvolved.css";

const GetInvolved = () => {
  return (
    <main className="gi-wrapper">

      {/* HERO */}
      <section className="gi-hero">
        <div className="gi-hero-content">
          <h1>Building Equality Through Institutions</h1>
          <p>
            India’s constitutional promise of equality remains unevenly
            experienced. Shaurya4Equality bridges this gap through
            professional, scalable, and institutional solutions.
          </p>

          <div className="gi-hero-actions">
            <a href="/contact" className="gi-btn primary">Partner With Us</a>
            <a href="#focus" className="gi-btn secondary">Explore Focus Areas</a>
          </div>
        </div>
      </section>

      {/* CORE BELIEF */}
      <section className="gi-belief">
        <h2>Our Core Belief</h2>
        <p>Equality cannot be sustained by law alone. It requires:</p>

        <div className="gi-belief-tags">
          <span>Awareness</span>
          <span>Access</span>
          <span>Institutions</span>
          <span>Processes</span>
          <span>Economic Participation</span>
        </div>
      </section>

      {/* STRATEGIC FOCUS */}
      <section className="gi-focus" id="focus">
        <h2>Strategic Focus Areas</h2>

        <div className="gi-focus-grid">

          <div className="gi-focus-card">
            <h3>Gender Equality Systems</h3>
            <ul>
              <li>Prevention of harassment & discrimination</li>
              <li>Strengthening grievance mechanisms</li>
              <li>Committee & leadership capacity building</li>
              <li>Fairness-oriented workplace practices</li>
            </ul>
            <a href="/contact" className="gi-card-link">
              Work With Us →
            </a>
          </div>

          <div className="gi-focus-card">
            <h3>Access to Justice Enablement</h3>
            <ul>
              <li>Legal & procedural literacy</li>
              <li>Guidance on grievance pathways</li>
              <li>Pre-litigation resolution support</li>
              <li>Collaboration with legal institutions</li>
            </ul>
            <a href="/contact" className="gi-card-link">
              Enable Access to Justice →
            </a>
          </div>

          <div className="gi-focus-card">
            <h3>Decentralized Entrepreneurial Enablement</h3>
            <ul>
              <li>Associate-led service models</li>
              <li>Training & capability building</li>
              <li>Ethical income opportunities</li>
              <li>Knowledge-based entrepreneurship</li>
            </ul>
            <a href="/contact" className="gi-card-link">
              Become an Associate →
            </a>
          </div>

        </div>
      </section>

      {/* OPERATING PHILOSOPHY */}
      <section className="gi-philosophy">
        <h2>How We Operate</h2>

        <div className="gi-philosophy-grid">
          <span>Professionalism over Activism</span>
          <span>Process over Personality</span>
          <span>Fairness over Expediency</span>
          <span>Sustainability over Rapid Scale</span>
          <span>Decentralization over Concentration</span>
          <span>Collaboration over Confrontation</span>
        </div>

        <p className="gi-philosophy-note">
          Shaurya4Equality remains non-political, non-partisan, and
          institution-centric, operating strictly within legal and policy
          frameworks.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="gi-final-cta">
        <h2>Ready to Build Systems That Enable Equality?</h2>
        <p>
          Whether you are an institution, professional, or organization,
          there is a meaningful way to collaborate with Shaurya4Equality.
        </p>
        <a href="/contact" className="gi-btn primary large">
          Start a Collaboration
        </a>
      </section>

    </main>
  );
};

export default GetInvolved;
