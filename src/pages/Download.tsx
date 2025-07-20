
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Smartphone, Monitor, Scan, Download as DownloadIcon, CheckCircle } from "lucide-react";
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Mobile App */}
            <div className="bg-white p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-soft transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  ScanHadir Mobile
                </h3>
                <p className="text-muted-foreground text-sm">
                  Aplikasi utama untuk menampilkan QR Code absensi
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">QR Code Generator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">GPS Location Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Riwayat Absensi</span>
                </div>
              </div>

              <Button className="w-full" asChild>
                <a href={siteData.downloads.playstore} target="_blank" rel="noopener noreferrer">
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download dari Play Store
                </a>
              </Button>

              <img 
                src="/lovable-uploads/b3d23025-f156-4be9-a1eb-7adf887da269.png"
                alt="ScanHadir Mobile Preview"
                className="w-full mt-6 rounded-xl"
              />
            </div>

            {/* Scanner App */}
            <div className="bg-white p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-soft transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Scan className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  ScanHadir Scanner
                </h3>
                <p className="text-muted-foreground text-sm">
                  Aplikasi pemindai QR Code khusus untuk institusi
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">QR Code Scanner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Real-time Validation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Admin Access Only</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <a href={siteData.downloads.scanner} target="_blank" rel="noopener noreferrer">
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download (Institusi)
                </a>
              </Button>

              <img 
                src="/lovable-uploads/94e5ba83-6cfc-455c-8504-5cf74d301853.png"
                alt="ScanHadir Scanner Preview"
                className="w-full mt-6 rounded-xl"
              />
            </div>

            {/* Desktop Dashboard */}
            <div className="bg-white p-8 rounded-2xl border border-border hover:border-primary/20 hover:shadow-soft transition-all">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  ScanHadir Dashboard
                </h3>
                <p className="text-muted-foreground text-sm">
                  Dashboard admin untuk Windows desktop
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Admin Dashboard</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Report Generator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">User Management</span>
                </div>
              </div>

              <Button variant="outline" className="w-full" asChild>
                <a href={siteData.downloads.windows} target="_blank" rel="noopener noreferrer">
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download untuk Windows
                </a>
              </Button>

              <div className="w-full mt-6 bg-muted/20 rounded-xl p-8 text-center">
                <Monitor className="h-16 w-16 text-primary mx-auto mb-2" />
                <p className="text-sm text-muted-foreground">Dashboard Preview</p>
              </div>
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

      <Footer />
    </div>
  );
};

export default Download;
