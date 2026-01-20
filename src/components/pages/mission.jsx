import useReveal from "../common/hooks";
import visionImg from "../../assets/images/vision.jpg";
import "../styles/mission.css";

const MissionVision = () => {
  const [visionRef, visionVisible] = useReveal();
  const [m1Ref, m1Visible] = useReveal();
  const [m2Ref, m2Visible] = useReveal();
  const [m3Ref, m3Visible] = useReveal();

  return (
    <section className="mv-section">
      <div className="mv-container">

        {/* VISION */}
        <div
          ref={visionRef}
          className={`vision-row ${visionVisible ? "show" : ""}`}
        >
          <div className="vision-text">
            <span className="mv-eyebrow">VISION 2047</span>
            <h2>Building a More Equal, Just & Participative India</h2>

            <p>
              To contribute to the building of a more equal, just, and participative
              India by creating accessible, credible, and decentralized systems that
              protect dignity, enable justice, and support equitable economic
              opportunity.
            </p>

            <ul>
              <li>A trusted institutional partner in advancing gender equality</li>
              <li>A practical enabler of access to justice</li>
              <li>
                A catalyst for decentralized, values-aligned entrepreneurship across
                India
              </li>
            </ul>
          </div>

          <div className="vision-image">
            <img src={visionImg} alt="Vision" />
          </div>
        </div>

        {/* MISSION */}
        <div className="mission-block">
          <span className="mv-eyebrow">OUR MISSION</span>

          <div className="mission-cards">
            <div
              ref={m1Ref}
              className={`mission-card ${m1Visible ? "show" : ""}`}
            >
              <h3>Promote Gender Equality</h3>
              <p>
                Supporting organizations, institutions, and communities in preventing
                discrimination, ensuring fairness, and strengthening systems that
                protect dignity—particularly in workplaces.
              </p>
            </div>

            <div
              ref={m2Ref}
              className={`mission-card ${m2Visible ? "show" : ""}`}
            >
              <h3>Improve Access to Justice</h3>
              <p>
                Demystifying legal processes, enhancing procedural awareness, and
                enabling individuals and institutions to navigate grievance redressal
                mechanisms with clarity, confidence, and fairness.
              </p>
            </div>

            <div
              ref={m3Ref}
              className={`mission-card ${m3Visible ? "show" : ""}`}
            >
              <h3>Enable Decentralized Economic Participation</h3>
              <p>
                Supporting ethical, knowledge-driven entrepreneurial models that allow
                individuals—especially women and underserved groups—to participate
                meaningfully in economic activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
