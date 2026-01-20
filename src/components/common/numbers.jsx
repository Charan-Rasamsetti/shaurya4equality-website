import { useEffect, useRef, useState } from "react";
import "../styles/numbers.css";

const stats = [
  {
    value: 45,
    suffix: "+",
    label: "Corporate Companies",
    sub: "Partnered across sectors",
  },
  {
    value: 20000,
    suffix: "+",
    label: "Employees Trained",
    sub: "Empowered through awareness & compliance",
  },
  {
    value: 9,
    suffix: "+",
    label: "Years Experience",
    sub: "Deep domain expertise",
  },
];

const ImpactNumbers = () => {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="impact-section" ref={sectionRef}>
      <h2 className="impact-title">Numbers That Speak</h2>
      <p className="impact-subtitle">Our impact in action</p>

      <div className="impact-grid">
        {stats.map((item, index) => (
          <StatCard
            key={index}
            {...item}
            start={startCount}
            delay={index * 150}
          />
        ))}
      </div>
    </section>
  );
};

const StatCard = ({ value, suffix, label, sub, start, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    const duration = 1500;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) requestAnimationFrame(animate);
    };

    setTimeout(() => requestAnimationFrame(animate), delay);
  }, [start, value, delay]);

  return (
    <div className={`impact-card ${start ? "show" : ""}`}>
      <h3 className="impact-number">
        {count.toLocaleString()}
        {suffix}
      </h3>
      <p className="impact-label">{label}</p>
      <span className="impact-desc">{sub}</span>
    </div>
  );
};

export default ImpactNumbers;
