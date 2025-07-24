import { Badge } from "@/components/ui/badge";
import { Check, X, Minus } from "lucide-react";

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

  const getFeatureIcon = (value: string | boolean) => {
    if (value === true || value === "✓") {
      return <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"><Check className="w-4 h-4 text-white" /></div>;
    } else if (value === "✗") {
      return <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center"><X className="w-4 h-4 text-white" /></div>;
    } else {
      return <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center"><Minus className="w-4 h-4 text-white" /></div>;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Perbandingan Fitur Kompetitor
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Lihat mengapa ScanHadir unggul dibanding aplikasi absensi lainnya
          </p>
        </div>

        <div className="space-y-8">
          {comparisonData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
              <div className="bg-slate-700 px-6 py-4 border-b border-slate-600">
                <h3 className="text-lg font-bold text-white flex items-center">
                  <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">{categoryIndex + 1}</span>
                  </div>
                  {category.category}
                </h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-750 border-b border-slate-600">
                      <th className="text-left py-4 px-6 text-slate-300 font-medium min-w-[300px]">Fitur</th>
                      {competitors.map((competitor) => (
                        <th key={competitor.key} className="text-center py-4 px-4 min-w-[120px]">
                          <Badge
                            variant={competitor.highlight ? "default" : "secondary"}
                            className={`${competitor.highlight ? 'bg-primary text-primary-foreground' : 'bg-slate-600 text-slate-200'} text-xs`}
                          >
                            {competitor.name}
                          </Badge>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {category.features.map((featureRow, featureIndex) => (
                      <tr key={featureIndex} className="border-b border-slate-700 hover:bg-slate-750/50">
                        <td className="py-4 px-6 text-slate-200 text-sm leading-relaxed">
                          {featureRow.feature}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {getFeatureIcon(featureRow.scanhadir)}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {getFeatureIcon(featureRow.hadir)}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {getFeatureIcon(featureRow.makari)}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {getFeatureIcon(featureRow.jibble)}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {getFeatureIcon(featureRow.presensi)}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {getFeatureIcon(featureRow.gajihub)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-slate-400">
            *Data perbandingan berdasarkan fitur yang tersedia per tanggal terakhir update
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;