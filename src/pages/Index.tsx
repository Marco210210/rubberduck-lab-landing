import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import TeamSection from "@/components/TeamSection";
// import MagneticSection from "@/components/MagneticSection";
import MarqueeSection from "@/components/MarqueeSection";
import ManifestoSection from "@/components/ManifestoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      {/* Overlays */}
      <div className="noise-overlay" />
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />

        {/* Cosa facciamo e cosa possiamo vendere */}
        <ManifestoSection />

        {/* Prova concreta delle nostre capacità */}
        <WorkSection />

        {/* Chi c’è dietro */}
        <TeamSection />

        {/* Separatore visivo / ritmo */}
        <MarqueeSection />

        {/* CTA finale */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
