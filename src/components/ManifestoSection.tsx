import { motion } from "framer-motion";

const ManifestoSection = () => {
  const text =
    "We craft digital experiences that defy expectations. Smart. Scalable. Significant.";
  const words = text.split(" ");

  return (
    <section className="py-32 px-6 bg-background border-t border-border relative flex items-center justify-center min-h-[50vh]">
      <div className="section-label">[ 05. MANIFESTO ]</div>

      <div className="text-center max-w-4xl mx-auto">
        <p className="text-2xl md:text-4xl lg:text-5xl font-light leading-relaxed">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className={`inline-block mr-2 ${
                ["Smart.", "Scalable.", "Significant."].includes(word)
                  ? "text-primary font-medium"
                  : "text-muted-foreground"
              }`}
            >
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default ManifestoSection;
