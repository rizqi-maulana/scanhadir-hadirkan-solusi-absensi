
import { siteData } from "@/data/siteData";
import { QrCode, MapPin, Navigation, Shield, BarChart3, Clock } from "lucide-react";

const iconMap = {
  QrCode,
  MapPin,
  Navigation,
  Shield,
  BarChart3,
  Clock
};

const FeaturesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Fitur Unggulan ScanHadir
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dilengkapi dengan teknologi terdepan untuk memberikan solusi absensi yang akurat dan efisien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div 
                key={index}
                className="group p-8 bg-white rounded-2xl border border-border hover:border-primary/20 hover:shadow-soft transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
