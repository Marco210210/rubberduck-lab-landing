import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollTop / docHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress Bar */}
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed w-full z-50 px-8 py-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display font-semibold text-xl tracking-tighter hoverable"
        >
          RUBBERDUCK LAB<span className="text-primary">.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-6"
        >
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <a
              href="#work"
              className="hoverable opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300"
            >
              WORK
            </a>
            <a
              href="#team"
              className="hoverable opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300"
            >
              THE LAB
            </a>
            <a
              href="#contact"
              className="hoverable opacity-60 hover:opacity-100 hover:text-primary transition-all duration-300"
            >
              CONTACT
            </a>
          </div>

          <a
            href="#contact"
            className="hoverable border border-border px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          >
            Let's Talk
          </a>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
