import { motion } from "framer-motion";
import { User } from "lucide-react";

const team = [
  {
    name: "Giammario Paolella",
    role: "Project Manager",
    bio: "Gestione end-to-end di progetti digitali. Trasforma esigenze complesse in roadmap concrete, garantendo un processo di delivery strutturato e trasparente.",
    image: "/giammario-paolella.png",
  },
  {
    name: "Edmondo Battipaglia",
    role: "Full Stack Dev & AI Specialist",
    bio: "Ingegnere informatico focalizzato su architetture scalabili. Unisce lo sviluppo web moderno con l'integrazione di modelli di Intelligenza Artificiale.",
    image: "/edmondo-battipaglia.jpg",
  },
  {
    name: "Marco Di Maio",
    role: "Data Scientist & ML Engineer",
    bio: "Sviluppa soluzioni data-driven solide e utilizzabili. Esperto nel trasformare dati complessi in dashboard chiare e strumenti di supporto decisionale.",
    image: "/marco-dimaio.jpg",
  },
];

const TeamSection = () => {
  return (
    <section
      id="team"
      className="py-32 px-6 md:px-12 bg-background border-t border-border relative"
    >
      <div className="section-label">[ 02. THE LAB ]</div>

      <div className="max-w-6xl mx-auto pt-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-display font-semibold text-center mb-4"
        >
          The <span className="text-primary">Lab</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-muted-foreground text-center mb-16 max-w-xl mx-auto"
        >
          Three minds, one vision. We combine diverse expertise to deliver
          exceptional digital solutions.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="team-card text-center hoverable"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-primary/30 bg-secondary flex items-center justify-center group-hover:border-primary transition-colors overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-8 h-8 text-primary" />
                )}
              </div>

              {/* Name */}
              <h3 className="font-display text-xl font-semibold mb-2">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
