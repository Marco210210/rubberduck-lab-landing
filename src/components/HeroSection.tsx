import { motion } from "framer-motion";
import logo from "@/assets/logo_rubberducklab.png";
import ParticleCanvas from "./ParticleCanvas";
import { useRef } from "react";

const skills = [
  "AI AUTOMATION",
  "DATA SCIENCE",
  "FULL-STACK SYSTEMS",
  "PYTHON & ML",
  "REACT / FRONTEND",
  "CLOUD ARCHITECTURE",
];

const HeroSection = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playDuckSound = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  return (
    <header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
      <ParticleCanvas id="hero-canvas" />
      <audio
        ref={audioRef}
        src="/Duck%20Quack%20sound%20effect%20%20%20No%20Copyright.mp3"
        preload="auto"
      />

      <div className="section-label">[ 00. PROFILE ]</div>

      <div className="relative z-10 w-full max-w-6xl px-6 grid md:grid-cols-[auto_1fr] gap-12 md:gap-24 items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="order-1 md:order-none flex justify-center md:justify-start"
        >
          <button
            onClick={playDuckSound}
            aria-label="Play duck sound"
            className="w-40 h-40 md:w-64 md:h-64 rounded-full border border-border p-1 relative group cursor-pointer focus:outline-none focus-visible:outline-none transition-transform active:scale-95"
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-card/50 backdrop-blur-sm relative z-10 flex items-center justify-center">
              <img
                src={logo}
                alt="RubberDuck Lab Logo"
                className="w-3/4 h-3/4 object-contain animate-float"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </motion.div>

        {/* Text Content */}
        <div className="order-2 md:order-none text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] mb-6"
          >
            RubberDuck
            <br />
            <span className="text-gradient">Lab</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.1,
            }}
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0"
          >
            Creiamo esperienze digitali incentrate su AI, Data Science e Full
            Stack Engineering. Trasformiamo sfide complesse in soluzioni
            eleganti ed efficaci.
          </motion.p>

          {/* Skills Pills */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.23, 1, 0.32, 1],
              delay: 0.2,
            }}
            className="flex flex-wrap justify-center md:justify-start gap-2"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="skill-pill hoverable cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;

// Add shimmer animation style
const style = document.createElement("style");
style.textContent = `
  .text-gradient {
    background: linear-gradient(
      90deg,
      hsl(var(--primary)),
      hsl(var(--primary) / 0.8),
      #fff,
      hsl(var(--primary) / 0.8),
      hsl(var(--primary))
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s linear infinite;
  }
  @keyframes shimmer {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: 200% center;
    }
  }
`;
if (!document.head.querySelector("style[data-shimmer]")) {
  style.setAttribute("data-shimmer", "true");
  document.head.appendChild(style);
}
