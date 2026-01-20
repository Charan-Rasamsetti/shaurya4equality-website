import { useEffect, useState } from "react";
import "../styles/header.css";
import logo from "../../assets/images/logo_s4e.png";
import { Link } from "react-router-dom";

const Header = () =>{
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
     window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
            <img
                src={logo}
                alt="S4E Logo"
                className={`logo-img ${isScrolled ? "small" : ""}`}
            />
            </div>
        {/* Center content */}
        <div className="header-center">
          {!isScrolled ? (
            <p className="quote">
              “Equality Begins with Awareness. Equality Grows with Action”
            </p>
          ) : (
            <nav className="nav">
               <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/get-involved">Get Involved</Link>
                <Link to="/contact">Contact</Link>
            </nav>
          )}
        </div>
        {/* CTA */}
        <button className="cta-btn">Stand for Equality</button>
      </div>
    </header>
  );
}
export default Header;