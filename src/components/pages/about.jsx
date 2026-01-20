import React from "react";
import aboutHeroImg from "../../assets/images/about_us.jpg";
import "../styles/about.css";
import aboutImg from "../../assets/images/about_2.webp";
import MissionVision from "./mission";
import ImpactNumbers from "../common/numbers";
import ContactCTA from "../common/contactcard";

const About = () => {
  return (
    <>
        <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutHeroImg})` }}
      >
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <h1>Equality Is Not an Idea.<br />It’s a Practice.</h1>
          <p>
            At Shaurya4Equality, we work at the intersection of awareness, policy,
            and action to build workplaces and communities that are safe,
            inclusive, and opportunity-driven.
          </p>
        </div>
      </section>
      {/* second part */}
      <section className="about-intro">
  <div className="about-container">

    {/* Section Heading */}
    <div className="about-heading">
      <h2>Who We Are</h2>
      <p>
        A purpose-driven collective working to make equality practical,
        measurable, and sustainable across India.
      </p>
    </div>

    {/* Content */}
    <div className="about-grid">
      
      
      {/* Left Content */}
      <div className="about-text">
         <div className="about-image">
      <img src={aboutImg} alt="About Shaurya4Equality" />
    </div>
        <p>
          Shaurya4Equality is a social impact organization committed to addressing
          gender inequality and income disparities through awareness, skills,
          compliance, and entrepreneurship.
        </p>

        <p>
          We work with individuals, workplaces, and communities to move beyond
          intention and enable real, measurable change that improves lives and
          institutions.
        </p>
      </div>

      {/* Right Highlights */}
      <div className="about-cards">
        <div className="about-card">
          <h4>Awareness</h4>
          <p>Building understanding that leads to informed action.</p>
        </div>

        <div className="about-card">
          <h4>Capability</h4>
          <p>Equipping people with skills and confidence to grow.</p>
        </div>

        <div className="about-card">
          <h4>Systems</h4>
          <p>Helping institutions create fair, compliant ecosystems.</p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* our mission and vision section */}
    <MissionVision />

    <ImpactNumbers />
    <ContactCTA />
    </>
  );
};

export default About;
