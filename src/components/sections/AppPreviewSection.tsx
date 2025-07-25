import { AppCarousel } from "@/components/ui/app-carousel";
import { siteData } from "@/data/siteData";
import { Smartphone, Monitor, Scan, X } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";

const AppPreviewSection = () => {
  const [selectedApp, setSelectedApp] = useState<{
    title: string;
    images: string[];
  } | null>(null);

  const appData = [
    {
      title: "ScanHadir Mobile",
      description: "Aplikasi untuk karyawan",
      icon: Smartphone,
      images: siteData.screenshots.mobile,
    },
    {
      title: "ScanHadir Scanner", 
      description: "Aplikasi pemindai QR",
      icon: Scan,
      images: siteData.screenshots.scanner,
    },
    {
      title: "ScanHadir Dashboard",
      description: "Dashboard admin desktop", 
      icon: Monitor,
      images: siteData.screenshots.desktop,
    },
  ];

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
          {appData.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <div key={index} className="bg-background rounded-2xl border border-border p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {app.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {app.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-medium text-foreground mb-2">
                      Fitur Utama
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {app.title === "ScanHadir Mobile" && "Aplikasi mobile untuk karyawan melakukan absensi dengan mudah menggunakan QR code. Dilengkapi dengan riwayat absensi dan notifikasi real-time."}
                      {app.title === "ScanHadir Scanner" && "Aplikasi khusus untuk memindai QR code karyawan. Interface yang sederhana dan cepat untuk proses absensi yang efisien."}
                      {app.title === "ScanHadir Dashboard" && "Dashboard admin lengkap untuk mengelola data absensi, laporan, dan pengaturan sistem. Dilengkapi dengan analytics dan export data."}
                    </p>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 px-4 rounded-lg transition-colors">
                        Lihat Screenshot & Slides
                      </button>
                    </DialogTrigger>
                    
                    <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-hidden">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {app.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {app.description}
                            </p>
                          </div>
                        </div>
                        
                        <Carousel className="w-full">
                          <CarouselContent>
                            {app.images.map((image, imageIndex) => (
                              <CarouselItem key={imageIndex}>
                                <div className="flex justify-center">
                                  <img
                                    src={image}
                                    alt={`${app.title} screenshot ${imageIndex + 1}`}
                                    className="max-w-full max-h-[60vh] object-contain rounded-lg"
                                  />
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;