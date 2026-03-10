import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import SocialProof from "@/components/SocialProof";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExpertiseSection />
      <SocialProof />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
