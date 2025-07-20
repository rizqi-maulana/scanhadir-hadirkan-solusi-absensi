
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import VideoSection from "@/components/sections/VideoSection";
import CompaniesSection from "@/components/sections/CompaniesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import DevelopersSection from "@/components/sections/DevelopersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <CompaniesSection />
      <TestimonialsSection />
      <PricingSection />
      <DevelopersSection />
      <Footer />
    </div>
  );
};

export default Index;
