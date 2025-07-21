import { AppCarousel } from "@/components/ui/app-carousel";
import { siteData } from "@/data/siteData";
import { Smartphone, Monitor, Scan } from "lucide-react";

const AppPreviewSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Preview Aplikasi ScanHadir
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lihat tampilan dari ketiga aplikasi yang tersedia dalam ekosistem ScanHadir
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mobile App Preview */}
          <div className="bg-background rounded-2xl border border-border p-6 hover:shadow-soft transition-all">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Smartphone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  ScanHadir Mobile
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aplikasi untuk karyawan
                </p>
              </div>
            </div>
            
            <AppCarousel 
              images={siteData.screenshots.mobile}
              title="ScanHadir Mobile"
            />
          </div>

          {/* Scanner App Preview */}
          <div className="bg-background rounded-2xl border border-border p-6 hover:shadow-soft transition-all">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Scan className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  ScanHadir Scanner
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aplikasi pemindai QR
                </p>
              </div>
            </div>
            
            <AppCarousel 
              images={siteData.screenshots.scanner}
              title="ScanHadir Scanner"
            />
          </div>

          {/* Desktop App Preview */}
          <div className="bg-background rounded-2xl border border-border p-6 hover:shadow-soft transition-all">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Monitor className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  ScanHadir Dashboard
                </h3>
                <p className="text-sm text-muted-foreground">
                  Dashboard admin desktop
                </p>
              </div>
            </div>
            
            <AppCarousel 
              images={siteData.screenshots.desktop}
              title="ScanHadir Dashboard"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;