import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Medical AI",
    category: "AI & Health",
    description:
      "Desktop app enabling secure AI dialogue for healthcare staff with source verification system.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format",
  },
  {
    title: "Super Mario Bros AI",
    category: "Reinforcement Learning",
    description:
      "DDQN/PPO agent playing Super Mario using YOLOv5 for real-time obstacle recognition.",
    video: "/Mario_Bros_Video_Generation.mp4",
  },
  {
    title: "SportTech DB",
    category: "Database Design",
    description:
      "Complex PostgreSQL database for sports competitions with automated scoring and reporting.",
    image:
      "https://images.unsplash.com/photo-1461896836934- voices-from-above-f8cd47c3a31c?w=800&auto=format",
  },
  {
    title: "City Statistics",
    category: "Data Analysis",
    description:
      "Statistical pipeline in R analyzing OECD urban indicators with clustering for policy insights.",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&auto=format",
  },
  {
    title: "LLM as Judge",
    category: "AI Evaluation",
    description:
      "Python framework using GPT-4 and Claude to evaluate chatbot quality with multi-metric analysis.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format",
  },
  {
    title: "Applied Statistics",
    category: "Statistical Modeling",
    description:
      "Complex dataset analysis with inferential modeling, regressions and advanced R visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1],
      }}
      className={`project-card group cursor-pointer hoverable aspect-[3/4] ${
        index % 3 === 1 ? "md:mt-12" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {project.video ? (
        <video
          ref={videoRef}
          src={project.video}
          loop
          muted
          playsInline
          aria-label={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <div className="absolute bottom-6 left-6 right-6 z-30">
        <span className="text-xs text-primary font-medium tracking-wider uppercase mb-2 block">
          {project.category}
        </span>
        <h3 className="text-xl font-display font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  return (
    <section
      id="work"
      className="py-32 px-6 md:px-12 bg-background border-t border-border relative"
    >
      <div className="section-label">[ 01. SELECTED WORKS ]</div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
