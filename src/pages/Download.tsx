
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
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

              <Button className="w-full" asChild>
                <a href={siteData.downloads.playstore} target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Play Store
                </a>
              </Button>
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

              <Button variant="outline" className="w-full" asChild>
                <a href={siteData.downloads.scanner} target="_blank" rel="noopener noreferrer">
                  <Smartphone className="mr-2 h-4 w-4" />
                  Download (Institusi)
                </a>
              </Button>
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

              <Button variant="outline" className="w-full" asChild>
                <a href={siteData.downloads.windows} target="_blank" rel="noopener noreferrer">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351"/>
                  </svg>
                  Windows
                </a>
              </Button>
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
