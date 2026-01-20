import logo from "../../assets/images/logo_s4e.png";
import "../styles/footer.css";
import logo1 from "../../assets/images/logo_s4e.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top */}
      <div className="footer-top">
        <img src={logo1} alt="Shaurya4Equality Logo" className="footer-logo" />

        <p className="footer-subtext">
          Stay connected. Get updates that matter.
        </p>

        <div className="footer-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>

        <div className="footer-consent">
          <label>
            <input type="checkbox" />
            I agree to receive newsletters
          </label>
          <label>
            <input type="checkbox" />
            I agree to be contacted via WhatsApp
          </label>
        </div>
      </div>

      {/* Links */}
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/work">Our Work</a>
        <a href="/get-involved">Get Involved</a>
        <a href="/contact">Contact</a>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-social">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Instagram">ig </a>
          <a href="#" aria-label="Twitter">x</a>
        </div>

        <div className="footer-center">
          <img src={logo} alt="S4E" />
          <span>Equality through action</span>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Shaurya4Equality Pvt.Ltd
        </div>
      </div>
    </footer>
  );
};

export default Footer;
