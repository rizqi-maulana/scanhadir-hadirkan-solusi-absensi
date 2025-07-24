import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisonData = [
    {
      category: "Fitur Android / Mobile App",
      features: [
        {
          feature: "Absen QR, absen lapangan (GPS), absen pulang, istirahat, riwayat absen, izin, profit pengguna",
          scanhadir: true,
          hadir: "Absensi selfie (face recognition), GPS, reimbursement, approval cuti/lembur",
          makari: "Selfie + GPS, integrasi fingerprint, mobile & web, mobile approval cuti/lembur",
          jibble: "QR code, GPS tracking, face recognition, timesheet",
          presensi: "Absensi dengan GPS, detection, mobile, approval cuti/lembur",
          gajihub: "GPS real-tin absensi incl aplikasi payroll terintegrasi"
        }
      ]
    },
    {
      category: "Dashboard Admin",
      features: [
        {
          feature: "Backup & restore (lokal + cloud), QR code scanner di dashbor, analisis kehadiran harian-bulanan-tahunan, analisis gender, manajemen staf lengkap",
          scanhadir: true,
          hadir: "Dashboard real-time approval cuti/lembur, reimbursement online, timesheet",
          makari: "Dashboard tampilan filter kehadiran, laporan penggajian, approval cuti/lembur",
          jibble: "Dashboard monitoring real-time, approval dan timesheet",
          presensi: "Dashboard laporan kunjungan, absensi, izin, timeline ada payroll",
          gajihub: "Dashboard payroll otomatis, reimbursem analisis kehadiran dan pinjaman"
        }
      ]
    },
    {
      category: "Manajemen Staf & Akun",
      features: [
        {
          feature: "CRUD staf, aktif/nonaktif akun massal, kirim kredensial via email, integrasi email, shared",
          scanhadir: true,
          hadir: "Manajemen staf dan karyawan secara real-time",
          makari: "Manajemen multi-user, multi-role",
          jibble: "Manajemen user dan tim",
          presensi: "Pengelolaan staf dan tim absensi",
          gajihub: "Manajemen karyawan, integrasi staf dan pinjaman"
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