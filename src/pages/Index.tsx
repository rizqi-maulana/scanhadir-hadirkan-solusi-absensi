
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import VideoSection from "@/components/sections/VideoSection";
import AppPreviewSection from "@/components/sections/AppPreviewSection";
import CompaniesSection from "@/components/sections/CompaniesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import DevelopersSection from "@/components/sections/DevelopersSection";
import FAQSection from "@/components/sections/FAQSection";
import { UpdateNotification } from "@/components/ui/update-notification";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <UpdateNotification 
        version="2.1.0" 
        features={["Peningkatan performa aplikasi", "Fitur baru ScanHadir Mobile", "Perbaikan bug dan keamanan"]} 
      />
      <Navigation />
      <HeroSection />
      <VideoSection />
      <AppPreviewSection />
      <FeaturesSection />
      <CompaniesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <DevelopersSection />
      <Footer />
    </div>
  );
};

export default Index;
