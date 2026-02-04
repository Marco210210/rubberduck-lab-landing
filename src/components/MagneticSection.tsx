
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const MagneticCircle = ({ text, onQuack }: { text: string; onQuack?: () => void }) => {
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

  const handleClick = () => {
    if (onQuack) {
      onQuack();
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
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
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    // Initialize Web Audio API for zero-latency playback
    const initAudio = async () => {
      try {
        // Create AudioContext
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioContextRef.current = audioContext;

        // Fetch and decode audio file
        const response = await fetch('/Duck%20Quack%20sound%20effect%20%20%20No%20Copyright.mp3');
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        audioBufferRef.current = audioBuffer;
      } catch (error) {
        console.error('Error initializing audio:', error);
      }
    };

    initAudio();

    // Cleanup
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const playDuckSound = () => {
    if (!audioContextRef.current || !audioBufferRef.current) return;

    try {
      // Resume context if suspended (browser autoplay policy)
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      // Create a new source node for each play (required for Web Audio API)
      const source = audioContextRef.current.createBufferSource();
      source.buffer = audioBufferRef.current;
      
      // Create gain node for volume control
      const gainNode = audioContextRef.current.createGain();
      gainNode.gain.value = 0.5; // 50% volume
      
      // Connect: source -> gain -> destination
      source.connect(gainNode);
      gainNode.connect(audioContextRef.current.destination);
      
      // Play immediately - this should be instant!
      source.start(0);
    } catch (error) {
      console.error('Error playing duck sound:', error);
    }
  };

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
        <MagneticCircle text="QUACK?" onQuack={playDuckSound} />
        <MagneticCircle text="PULL ME" />
      </div>
    </section>
  );
};

export default MagneticSection;
