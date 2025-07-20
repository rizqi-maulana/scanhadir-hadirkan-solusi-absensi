
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { AppCarousel } from "@/components/ui/app-carousel";
import FAQSection from "@/components/sections/FAQSection";
import { Smartphone, Monitor, Scan, CheckCircle } from "lucide-react";
import { siteData } from "@/data/siteData";

const Download = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Download ScanHadir
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Mulai gunakan sistem absensi modern untuk institusi Anda
            </p>
            
            {/* Pricing highlight */}
            <div className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-lg font-semibold text-primary">
                Rp {parseInt(siteData.app.price).toLocaleString('id-ID')}/{siteData.app.period}
              </span>
              <span className="text-muted-foreground ml-2">- Sudah termasuk instalasi & support</span>
            </div>
          </div>

          {/* Download Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            
            {/* Mobile App */}
            <div className="bg-white p-6 rounded-2xl border border-border hover:border-primary/20 hover:shadow-soft transition-all">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  ScanHadir Mobile
                </h3>
                <p className="text-muted-foreground text-sm">
                  Aplikasi utama untuk menampilkan QR Code absensi
                </p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">QR Code Generator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">GPS Location Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Riwayat Absensi</span>
                </div>
              </div>

              <Button className="w-full mb-4" asChild>
                <a href={siteData.downloads.playstore} target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 0c-1.65 0-3 1.35-3 3v18c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3H3zm7.55 3.45c.78 0 1.48.06 1.48.06v4.23h-.85c-.84 0-.99.4-.99.98v1.28h1.81l-.24 1.83h-1.57v4.7h-1.93v-4.7H6.51v-1.83h1.75V8.59c0-1.75 1.07-2.7 2.62-2.7.75 0 1.4.06 1.58.08v1.83h-1.08c-.85 0-1.01.4-1.01.98v1.28h2.01l-.26 1.83h-1.75v4.7H8.44v-4.7H6.78v-1.83h1.66V8.96c0-1.67 1.02-2.58 2.51-2.58.73 0 1.36.05 1.54.07z"/>
                  </svg>
                  Play Store
                </a>
              </Button>

              <AppCarousel 
                images={siteData.screenshots.mobile}
                title="ScanHadir Mobile"
              />
            </div>

            {/* Scanner App */}
            <div className="bg-white p-6 rounded-2xl border border-border hover:border-primary/20 hover:shadow-soft transition-all">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Scan className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  ScanHadir Scanner
                </h3>
                <p className="text-muted-foreground text-sm">
                  Aplikasi pemindai QR Code khusus untuk institusi
                </p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">QR Code Scanner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Real-time Validation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Admin Access Only</span>
                </div>
              </div>

              <Button variant="outline" className="w-full mb-4" asChild>
                <a href={siteData.downloads.scanner} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Download (Institusi)
                </a>
              </Button>

              <AppCarousel 
                images={siteData.screenshots.scanner}
                title="ScanHadir Scanner"
              />
            </div>

            {/* Desktop Dashboard */}
            <div className="bg-white p-6 rounded-2xl border border-border hover:border-primary/20 hover:shadow-soft transition-all">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  ScanHadir Dashboard
                </h3>
                <p className="text-muted-foreground text-sm">
                  Dashboard admin untuk Windows desktop
                </p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Admin Dashboard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">Report Generator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">User Management</span>
                </div>
              </div>

              <Button variant="outline" className="w-full mb-4" asChild>
                <a href={siteData.downloads.windows} target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351"/>
                  </svg>
                  Windows
                </a>
              </Button>

              <AppCarousel 
                images={siteData.screenshots.desktop}
                title="ScanHadir Dashboard"
              />
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white p-8 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              Yang Anda Dapatkan dengan Berlangganan
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {siteData.benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact for Demo */}
          <div className="text-center mt-16">
            <div className="bg-primary/5 p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Butuh Demo atau Konsultasi?
              </h3>
              <p className="text-muted-foreground mb-6">
                Tim kami siap membantu implementasi ScanHadir di institusi Anda
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a href={`mailto:${siteData.contact.email}`}>
                    Hubungi via Email
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={`https://wa.me/${siteData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    Chat WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </div>
  );
};

export default Download;
