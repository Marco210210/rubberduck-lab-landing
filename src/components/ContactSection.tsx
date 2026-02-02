import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="h-[80vh] bg-background relative border-t border-border flex items-center justify-center overflow-hidden"
    >
      <div className="section-label">[ 06. CONNECT ]</div>

      <ParticleCanvas id="contact-canvas" />

      <div className="relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-display font-semibold tracking-tighter mb-8"
        >
          Let's <span className="text-primary">Connect</span>
        </motion.h2>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          href="mailto:info@rubberducklab.com"
          className="cta-button hoverable"
        >
          Start Project
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
