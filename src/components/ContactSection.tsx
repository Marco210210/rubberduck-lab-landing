import { motion } from "framer-motion";
import ParticleCanvas from "./ParticleCanvas";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="h-[80vh] bg-background relative border-t border-border flex items-center justify-center overflow-hidden"
    >
      {/* <div className="section-label">[ 06. CONNECT ]</div> */}

      <div className="absolute inset-0 pointer-events-none">
        <ParticleCanvas id="contact-canvas" />
      </div>

      <div className="relative z-10 text-center max-w-2xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-semibold tracking-tighter mb-6"
        >
          Parliamo del tuo <span className="text-primary">prossimo progetto</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground mb-10"
        >
          Raccontaci il problema. Lo trasformiamo in una soluzione concreta.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          href={`mailto:next.srls.pm.24@gmail.com?subject=Richiesta%20di%20contatto&body=Ciao%20RubberDuck%20Lab,%0D%0A%0D%0Asono%20interessato%20a%20capire%20come%20potremmo%20collaborare%20o%20valutare%20una%20vostra%20soluzione%20per%20il%20mio%20progetto.%0D%0A%0D%0ANome:%0D%0AAzienda:%0D%0AMessaggio:%0D%0A%0D%0AGrazie,%0D%0A`}
          className="cta-button hoverable"
        >
          Contattaci
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
