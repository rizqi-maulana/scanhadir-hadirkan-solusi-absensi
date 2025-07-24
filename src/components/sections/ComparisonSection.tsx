import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisonData = [
    {
      category: "Fitur Android / Mobile App",
      features: [
        {
          feature: "Absen QR Code",
          scanhadir: true,
          hadir: "✓",
          makari: "✓",
          jibble: "✓",
          presensi: "✓",
          gajihub: "✗"
        },
        {
          feature: "Absen Lapangan (GPS)",
          scanhadir: true,
          hadir: "✓",
          makari: "✓",
          jibble: "✓",
          presensi: "✓",
          gajihub: "✓"
        },
        {
          feature: "Absen Pulang & Istirahat",
          scanhadir: true,
          hadir: "✗",
          makari: "✓",
          jibble: "✓",
          presensi: "✗",
          gajihub: "✗"
        },
        {
          feature: "Face Recognition",
          scanhadir: true,
          hadir: "✓",
          makari: "✗",
          jibble: "✓",
          presensi: "✓",
          gajihub: "✗"
        },
        {
          feature: "Riwayat Absensi Lengkap",
          scanhadir: true,
          hadir: "✓",
          makari: "✓",
          jibble: "✓",
          presensi: "✓",
          gajihub: "✓"
        },
        {
          feature: "Pengajuan Izin & Cuti",
          scanhadir: true,
          hadir: "✓",
          makari: "✓",
          jibble: "✗",
          presensi: "✓",
          gajihub: "✗"
        },
        {
          feature: "Profit/Komisi Pengguna",
          scanhadir: true,
          hadir: "✗",
          makari: "✗",
          jibble: "✗",
          presensi: "✗",
          gajihub: "✗"
        }
      ]
    },
    {
      category: "Dashboard Admin",
      features: [
        {
          feature: "Backup & Restore Data",
          scanhadir: true,
          hadir: "✗",
          makari: "✗",
          jibble: "✗",
          presensi: "✗",
          gajihub: "✗"
        },
        {
          feature: "QR Code Scanner Dashboard",
          scanhadir: true,
          hadir: "✗",
          makari: "✗",
          jibble: "✗",
          presensi: "✗",
          gajihub: "✗"
        },
        {
          feature: "Analisis Kehadiran Real-time",
          scanhadir: true,
          hadir: "✓",
          makari: "✓",
          jibble: "✓",
          presensi: "✓",
          gajihub: "✓"
        },
        {
          feature: "Laporan Harian/Bulanan/Tahunan",
          scanhadir: true,
          hadir: "✓",
          makari: "✓",
          jibble: "✓",
          presensi: "✓",
          gajihub: "✓"
        },
        {
          feature: "Analisis Gender Karyawan",
          scanhadir: true,
          hadir: "✗",
          makari: "✗",
          jibble: "✗",
          presensi: "✗",
          gajihub: "✗"
        },
        {
          feature: "Dashboard Payroll Terintegrasi",
          scanhadir: true,
          hadir: "✗",
          makari: "✓",
          jibble: "✗",
          presensi: "✓",
          gajihub: "✓"
        }
      ]
    },
    {
      category: "Manajemen Staf & Akun",
      features: [
        {
          feature: "CRUD Staf Lengkap",
          scanhadir: true,
          hadir: "✓",
          makari: "✓",
          jibble: "✓",
          presensi: "✓",
          gajihub: "✓"
        },
        {
          feature: "Aktif/Nonaktif Akun Massal",
          scanhadir: true,
          hadir: "✗",
          makari: "✓",
          jibble: "✗",
          presensi: "✗",
          gajihub: "✗"
        },
        {
          feature: "Kirim Kredensial via Email",
          scanhadir: true,
          hadir: "✗",
          makari: "✗",
          jibble: "✗",
          presensi: "✗",
          gajihub: "✗"
        },
        {
          feature: "Multi-role Management",
          scanhadir: true,
          hadir: "✓",
          makari: "✓",
          jibble: "✓",
          presensi: "✓",
          gajihub: "✓"
        },
        {
          feature: "Integrasi Email Otomatis",
          scanhadir: true,
          hadir: "✗",
          makari: "✗",
          jibble: "✗",
          presensi: "✗",
          gajihub: "✗"
        }
      ]
    },
    {
      category: "Fitur Khusus & Keamanan",
      features: [
        {
          feature: "Cloud Storage Backup",
          scanhadir: true,
          hadir: "✗",
          makari: "✓",
          jibble: "✓",
          presensi: "✗",
          gajihub: "✗"
        },
        {
          feature: "Data Encryption",
          scanhadir: true,
          hadir: "✓",
          makari: "✓",
          jibble: "✓",
          presensi: "✓",
          gajihub: "✓"
        },
        {
          feature: "Offline Mode Support",
          scanhadir: true,
          hadir: "✗",
          makari: "✗",
          jibble: "✗",
          presensi: "✗",
          gajihub: "✗"
        },
        {
          feature: "Custom Branding",
          scanhadir: true,
          hadir: "✗",
          makari: "✓",
          jibble: "✓",
          presensi: "✗",
          gajihub: "✗"
        }
      ]
    }
  ];

  const competitors = [
    { key: "scanhadir", name: "ScanHadir", highlight: true },
    { key: "hadir", name: "Hadir" },
    { key: "makari", name: "Makari Talenta" },
    { key: "jibble", name: "Jibble" },
    { key: "presensi", name: "Presensi" },
    { key: "gajihub", name: "GajiHub" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Perbandingan Fitur Kompetitor
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lihat mengapa ScanHadir unggul dibanding aplikasi absensi lainnya
          </p>
        </div>

        <div className="space-y-8">
          {comparisonData.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                <CardTitle className="text-xl font-bold text-primary">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {category.features.map((featureRow, featureIndex) => (
                  <div key={featureIndex} className="border-b last:border-b-0">
                    <div className="p-6">
                      <h4 className="font-semibold text-foreground mb-4 text-sm leading-relaxed">
                        {featureRow.feature}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {competitors.map((competitor) => (
                          <div
                            key={competitor.key}
                            className={`p-4 rounded-lg border ${
                              competitor.highlight
                                ? "bg-primary/5 border-primary/20"
                                : "bg-muted/30 border-border"
                            }`}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <Badge
                                variant={competitor.highlight ? "default" : "secondary"}
                                className="text-xs"
                              >
                                {competitor.name}
                              </Badge>
                              {competitor.key === "scanhadir" && (
                                <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {competitor.key === "scanhadir"
                                ? "✓ Semua fitur lengkap"
                                : featureRow[competitor.key as keyof typeof featureRow]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            *Data perbandingan berdasarkan fitur yang tersedia per tanggal terakhir update
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;