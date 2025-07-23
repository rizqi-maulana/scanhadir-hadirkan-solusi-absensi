import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Download, Bug, Zap, Shield } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const Updates = () => {
  const updates = [
    {
      version: "2.1.0",
      date: "23 Juli 2025",
      type: "major",
      features: [
        { icon: Zap, text: "Peningkatan performa aplikasi hingga 40%" },
        { icon: Sparkles, text: "Fitur baru ScanHadir Mobile dengan teknologi AI" },
        { icon: Shield, text: "Peningkatan keamanan data dan enkripsi" },
        { icon: Bug, text: "Perbaikan 15+ bug yang dilaporkan pengguna" }
      ]
    },
    {
      version: "2.0.5",
      date: "15 Juli 2025",
      type: "minor",
      features: [
        { icon: Bug, text: "Perbaikan masalah loading pada dashboard" },
        { icon: Zap, text: "Optimasi database untuk response time lebih cepat" }
      ]
    },
    {
      version: "2.0.4",
      date: "8 Juli 2025",
      type: "patch",
      features: [
        { icon: Bug, text: "Perbaikan bug pada fitur export laporan" },
        { icon: Shield, text: "Update library keamanan" }
      ]
    },
    {
      version: "2.0.3",
      date: "1 Juli 2025",
      type: "minor",
      features: [
        { icon: Sparkles, text: "Tampilan baru untuk halaman laporan" },
        { icon: Zap, text: "Peningkatan kecepatan sinkronisasi data" },
        { icon: Bug, text: "Perbaikan masalah notifikasi push" }
      ]
    },
    {
      version: "2.0.2",
      date: "24 Juni 2025",
      type: "patch",
      features: [
        { icon: Bug, text: "Perbaikan crash pada Android versi lama" },
        { icon: Shield, text: "Peningkatan validasi input form" }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "major": return "bg-primary text-primary-foreground";
      case "minor": return "bg-blue-500 text-white";
      case "patch": return "bg-gray-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "major": return "Update Besar";
      case "minor": return "Update Kecil";
      case "patch": return "Perbaikan";
      default: return "Update";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Riwayat Update
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pantau semua pembaruan terbaru, fitur baru, dan perbaikan yang telah kami lakukan untuk meningkatkan pengalaman Anda.
            </p>
          </div>

          {/* Current Version Banner */}
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 mb-8">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/20 rounded-full">
                    <Download className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Versi Terbaru: v2.1.0
                    </h3>
                    <p className="text-muted-foreground">
                      Update terbaru dengan fitur-fitur canggih
                    </p>
                  </div>
                </div>
                <Button size="lg">
                  Download Sekarang
                </Button>
              </div>
            </div>
          </Card>

          {/* Updates List */}
          <div className="space-y-6">
            {updates.map((update, index) => (
              <Card key={update.version} className="overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        Versi {update.version}
                      </h3>
                      <Badge className={getTypeColor(update.type)}>
                        {getTypeLabel(update.type)}
                      </Badge>
                      {index === 0 && (
                        <Badge variant="outline" className="text-primary border-primary">
                          Terbaru
                        </Badge>
                      )}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {update.date}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {update.features.map((feature, featureIndex) => {
                      const IconComponent = feature.icon;
                      return (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <div className="p-1.5 bg-muted rounded-md">
                            <IconComponent className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <span className="text-foreground">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-12 bg-gradient-to-r from-muted/50 to-muted/30">
            <div className="p-8 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Dapatkan Notifikasi Update
              </h3>
              <p className="text-muted-foreground mb-4">
                Jadilah yang pertama mengetahui update terbaru dan fitur-fitur baru
              </p>
              <Button>
                Berlangganan Newsletter
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Updates;