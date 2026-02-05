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
        <WorkSection />
        <TeamSection />
        {/* <MagneticSection /> */}
        <ManifestoSection />
        <MarqueeSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
