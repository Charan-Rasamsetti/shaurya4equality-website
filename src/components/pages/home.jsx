import React from "react";
import '../../components/styles/home.css';
import heroImg from '../../assets/images/home_1.jpg';
import whoImg from '../../assets/images/who_we_are.webp';
import journeyImg from '../../assets/images/journey.webp';

const Home = () => {
    return(
        <>
    
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>Building A More Equal India</h1>
        <p>
          One Choice,One Change,One Workplace,One Life at a Time.
        </p>
        <button className="hero-btn">Stand With Us</button>
      </div>
      </section>
        {/* second section */}
        <section className="intro-section">
            <div className="intro-content">
                <p>
                A purpose-driven social impact organization working to reduce gender
                inequality and income/wealth inequality in India.<strong> Shaurya4Equality combine awareness,
                skills, compliance and entrepreneurship to help individuals, workplaces
                and communities move from good intentions to real, measurable change.</strong>
                </p>
            </div>
            <div className="btn_center">
               <button className="intro_button">Learn More About S4E  </button>
            </div>
        </section>
        {/* who we are section */}
            <section className="who-section">
  <div className="who-container">

    {/* Centered Heading */}
    <div className="who-header">
      <h2>Who We Are</h2>
      <p>
        Shaurya4Equality is a for-profit, social-purpose organization committed to building an India where safety, dignity, opportunity, and fairness are part of everyday life—not privileges reserved for a few.
      </p>
    </div>

    {/* Content Row */}
    <div className="who-content">
      <div className="who-text">
        <p>
         We work on two deeply interconnected challenges:
        </p>
        <div className="challenge-row">
            <div className="challenge-item">
                <span className="challenge-icon">♀</span>
                <h4>Gender Equality</h4>
            </div>

            <div className="challenge-item">
                <span className="challenge-icon">⚖</span>
                <h4>Income & Wealth Equality</h4>
            </div>
            </div>
                <p>
            Our mission is to make equality practical, sustainable, and accessible, through programs and pathways that empower people and transform institutions.
                </p>
                <button className="know_btn">Know More</button>
            </div>
            <div className="who-image">
                <img src={whoImg} alt="Who we are" />
            </div>
            </div>
        </div>
        </section>
       {/* we focus section */}
       <section>
            <h1 className="focus_on">We Focus on</h1>

            <div className="cards-wrapper">
                <div className="cards-grid">
                <div className="info-card">
                    <h3>Gender Equality & Safety</h3>
                    <p>
                    We help individuals and organizations build environments where every
                    voice is respected, every boundary is understood, and every
                    person—regardless of gender—feels safe and valued.
                    </p>
                </div>

                <div className="info-card">
                    <h3>Economic & Opportunity Equality</h3>
                    <p>
                    We strengthen income stability and upward mobility by building
                    practical skills, improving employability, and supporting
                    livelihoods and micro-enterprises.
                    </p>
                </div>

                {/* FULL-WIDTH CARD */}
                <div className="info-card full-width">
                    <h3>Decentralized Entrepreneurial Enablement</h3>
                    <p>
                    We translate awareness into measurable impact through education,
                    compliance, and community-driven programs that create lasting,
                    systemic change.
                    </p>
                </div>
                </div>
            </div>
            </section>

        {/* our path way section */}
        <section className="approach-section">
            <h1>Our Pathway to Impact</h1>
             <div className="steps-grid">
                <div className="step-card">
                <span>01</span>
                <h4>Awareness & Reflection</h4>
                <p>Helping people recognize bias, inequality and unsafe patterns that often go unnoticed—in homes, workplaces and communities.</p>
                </div>
                <div className="step-card">
                <span>02</span>
                <h4>Skills & Conversations</h4>
                <p>Teaching practical tools: listening, boundaries, assertiveness, respect, by-stander action and constructive dialogue.</p>
                </div>
                <div className="step-card">
                <span>03</span>
                <h4>Systems & Structures</h4>
                <p>Supporting organizations to build meaningful structures such as policies, mechanisms and accountability frameworks.</p>
                </div>
                <div className="step-card">
                <span>04</span>
                <h4>Livelihood & Entrepreneurship Pathways</h4>
                <p>Enabling individuals and families to build income, confidence and independence through skills, micro-entrepreneurship and livelihood networks.</p>
                </div>
            </div>
        </section>
        {/* we work with */}
        <section className="communities-section">
                <h1 className="section-title">Communities We Work With</h1>

                <div className="communities-grid">
                    <div className="community-card">
                    <h3>Individuals & Communities</h3>
                    <p>
                        Individuals
                        People seeking knowledge, clarity, support or pathways to a more equal life at home and at work.
                    </p>
                    </div>

                    <div className="community-card">
                    <h3>Organizations & Workplaces</h3>
                    <p>
                       Companies, startups, NGOs and institutions that want to align compliance, culture and performance
                    </p>
                    </div>

                    <div className="community-card">
                    <h3>Educational Institutions</h3>
                    <p>
                        Institutions preparing the next generation with life skills, respect and emotional intelligence.
                    </p>
                    </div>

                    <div className="community-card">
                    <h3>Partners & Ecosystem Collaborators</h3>
                    <p>
                       Incubators, CSR teams, development agencies and government bodies advancing equality
                    </p>
                    </div>
                </div>
          </section>
          <section className="journey-alt-section">
            <div className="journey-alt-container">
                
                {/* Left Image */}
                <div className="journey-alt-image">
                <img src={journeyImg} alt="Our Journey" />
                </div>

                {/* Right Content */}
                <div className="journey-alt-content">
                <h2>Our Journey</h2>
                <p>
                    Shaurya4Equality began with a simple yet powerful belief — equality
                    should move beyond intention and become lived reality. Over the years,
                    our work has evolved through learning, collaboration, and action.
                </p>
                <p>
                    From awareness-building to strengthening livelihoods and institutions,
                    our journey reflects a commitment to sustainable, inclusive change.
                </p>
                <button className="journey-btn">Explore Our Journey</button>
                </div>
            </div>
            </section>
            <section className="contact-cta-section1">
                <div className="contact-cta-container1">
                    <h2>Let’s Build Equality Together</h2>
                    <p>
                    Whether you are an individual, organization, or community, we’d love
                    to hear from you and explore how we can create meaningful impact together.
                    </p>

                    <div className="contact-cta-actions1">
                    <button className="primary-btn">Contact Us</button>
                    <button className="secondary-btn">Get Involved</button>
                    </div>
                </div>
                </section>
    </>
    
    )
}

export default Home;