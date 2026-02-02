import { motion } from "framer-motion";
import { useRef, useState } from "react";

const MagneticCircle = ({ text }: { text: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.6;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.6;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="magnetic-wrap hoverable"
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        className="magnetic-circle w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
      >
        <span className="text-sm font-semibold tracking-widest text-foreground group-hover:text-background">
          {text}
        </span>
      </motion.div>
    </div>
  );
};

const MagneticSection = () => {
  return (
    <section className="py-32 bg-background flex flex-col items-center justify-center border-t border-border relative overflow-hidden">
      <div className="section-label">[ 03. PHYSICS & TRAIL ]</div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-3xl font-display font-semibold">
          Magnetic & <span className="text-primary">Trail</span>
        </h2>
      </motion.div>

      <div className="relative z-10 flex flex-wrap justify-center gap-12">
        <MagneticCircle text="QUACK?" />
        <MagneticCircle text="PULL ME" />
      </div>
    </section>
  );
};

export default MagneticSection;
