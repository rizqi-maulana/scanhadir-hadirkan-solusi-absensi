
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Download, Smartphone } from "lucide-react";
import { siteData } from "@/data/siteData";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                {siteData.app.tagline}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {siteData.app.description}
              </p>
            </div>

            {/* Price Display */}
            <div className="bg-white p-6 rounded-2xl shadow-soft border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Biaya Berlangganan</p>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold text-primary">
                      Rp {parseInt(siteData.app.price).toLocaleString('id-ID')}
                    </span>
                    <span className="text-muted-foreground">/{siteData.app.period}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Termasuk:</p>
                  <p className="text-sm font-medium">Installer + Support</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link to="/download">
                  <Download className="mr-2 h-5 w-5" />
                  Download Sekarang
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link to="/tentang">
                  <Play className="mr-2 h-5 w-5" />
                  Tentang Kami
                </Link>
              </Button>
            </div>

            {/* Features highlight */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">QR Code</div>
                <div className="text-sm text-muted-foreground">Absensi Praktis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">GPS</div>
                <div className="text-sm text-muted-foreground">Verifikasi Lokasi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative flex justify-center items-center">
            <div className="relative max-w-sm mx-auto">
              {/* Main Mobile App */}
              <div className="relative">
                <img
                  src="/lovable-uploads/b3d23025-f156-4be9-a1eb-7adf887da269.png"
                  alt="ScanHadir Mobile App"
                  className="w-full max-w-64 mx-auto rounded-3xl shadow-elegant transform hover:scale-105 transition-transform duration-500"
                />
                
                {/* Secondary App - Floating */}
                <div className="absolute -right-4 top-8 w-16 hidden sm:block">
                  <img
                    src="/lovable-uploads/94e5ba83-6cfc-455c-8504-5cf74d301853.png"
                    alt="Scanner App"
                    className="w-full rounded-2xl shadow-elegant transform rotate-12 hover:rotate-6 transition-transform duration-300"
                  />
                </div>
                
                {/* Desktop Preview - Floating */}
                <div className="absolute -left-4 bottom-8 w-14 hidden sm:block">
                  <div className="bg-white p-1 rounded-lg shadow-elegant transform -rotate-12 hover:-rotate-6 transition-transform duration-300">
                    <img
                      src="/lovable-uploads/4768d38b-7403-49c2-b48e-7c57f2cf1c05.png"
                      alt="Desktop Dashboard"
                      className="w-full rounded"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium shadow-elegant animate-pulse">
              Aman & Terpercaya
            </div>
            <div className="absolute -bottom-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-elegant border">
              Mudah Digunakan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
