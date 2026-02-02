const MarqueeSection = () => {
  const items = [
    "AI INTEGRATION",
    "DATA SCIENCE",
    "FULL STACK",
    "MACHINE LEARNING",
    "AI INTEGRATION",
    "DATA SCIENCE",
    "FULL STACK",
    "MACHINE LEARNING",
  ];

  return (
    <section className="py-20 bg-background border-t border-border relative overflow-hidden">
      <div className="section-label">[ 04. INFINITE SCROLL ]</div>

      <div className="marquee-container overflow-hidden hoverable">
        <div className="marquee-track">
          {items.map((item, index) => (
            <span key={index} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
