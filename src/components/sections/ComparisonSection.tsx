import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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

        <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-bold text-foreground min-w-[200px]">
                    Fitur / Aplikasi
                  </TableHead>
                  {competitors.map((competitor) => (
                    <TableHead 
                      key={competitor.key} 
                      className={`font-bold text-center min-w-[150px] ${
                        competitor.highlight 
                          ? "bg-primary text-primary-foreground" 
                          : "text-foreground"
                      }`}
                    >
                      {competitor.name}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((category, categoryIndex) => (
                  <>
                    <TableRow key={`category-${categoryIndex}`} className="bg-gray-100">
                      <TableCell 
                        colSpan={competitors.length + 1} 
                        className="font-bold text-foreground py-4"
                      >
                        {category.category}
                      </TableCell>
                    </TableRow>
                    {category.features.map((featureRow, featureIndex) => (
                      <TableRow key={`feature-${categoryIndex}-${featureIndex}`}>
                        <TableCell className="font-medium text-sm leading-relaxed py-6">
                          {featureRow.feature}
                        </TableCell>
                        <TableCell className="text-center py-6">
                          <div className="flex items-center justify-center">
                            <Check className="h-6 w-6 text-green-600" />
                          </div>
                        </TableCell>
                        <TableCell className="text-sm leading-relaxed py-6">
                          {featureRow.hadir}
                        </TableCell>
                        <TableCell className="text-sm leading-relaxed py-6">
                          {featureRow.makari}
                        </TableCell>
                        <TableCell className="text-sm leading-relaxed py-6">
                          {featureRow.jibble}
                        </TableCell>
                        <TableCell className="text-sm leading-relaxed py-6">
                          {featureRow.presensi}
                        </TableCell>
                        <TableCell className="text-sm leading-relaxed py-6">
                          {featureRow.gajihub}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                ))}
              </TableBody>
            </Table>
          </div>
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