
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Shield, Calendar } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="h-12 w-12 text-primary" />
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
                Kebijakan Privasi
              </h1>
            </div>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Calendar className="h-5 w-5" />
              <p className="text-lg">Terakhir diperbarui: 24 Juni 2025</p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl border border-border p-8 space-y-8">
            
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Data yang Kami Kumpulkan
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">A. Data Pribadi</h3>
                  <p className="text-muted-foreground mb-2"><strong>Profil Pengguna:</strong></p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Nama lengkap</li>
                    <li>Alamat email institusional</li>
                    <li>Nomor telepon</li>
                    <li>Foto profil (opsional)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">B. Data Absensi</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Waktu absensi</li>
                    <li>Lokasi GPS</li>
                    <li>Jenis absensi (masuk/istirahat/pulang/lapangan)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">C. Data Teknis</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Model perangkat</li>
                    <li>Sistem operasi</li>
                    <li>Alamat IP</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Metode Pengumpulan Data
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Input manual:</strong> Dilakukan oleh admin institusi melalui dashboard</li>
                <li><strong>Otomatis:</strong> Sistem mengumpulkan data melalui:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Pemindaian QR Code</li>
                    <li>Deteksi lokasi GPS</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Tujuan Pengolahan Data
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Lokasi GPS</h3>
                  <p className="text-muted-foreground mb-2">Digunakan untuk:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Verifikasi kehadiran fisik di lokasi institusi</li>
                    <li>Pelacakan absensi lapangan</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">Digunakan untuk:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Mengirim informasi login kepada pengguna terdaftar</li>
                    <li>Notifikasi penting terkait absensi</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Pembagian Data ke Pihak Ketiga
              </h2>
              <p className="text-muted-foreground mb-4">Kami menggunakan layanan pihak ketiga berikut:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Supabase:</strong> Untuk penyimpanan file seperti foto profil. Data absensi disimpan di server institusi.</li>
                <li><strong>Resend:</strong> Untuk pengiriman email notifikasi</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Kami tidak menjual atau membagikan data pribadi Anda kepada pihak ketiga lainnya.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Keamanan Data
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Kebijakan Penyimpanan</h3>
                  <p className="text-muted-foreground mb-2">
                    Data tersimpan secara permanen di server institusi. Institusi memiliki hak penuh untuk:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Mengelola data sesuai kebijakan internal</li>
                    <li>Menghapus data kapan saja</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Enkripsi</h3>
                  <p className="text-muted-foreground">
                    Kami menerapkan standar enkripsi untuk melindungi data selama transmisi dan penyimpanan.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Hak Pengguna
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Akses Data</h3>
                  <p className="text-muted-foreground">
                    Pengguna dapat meminta akses data dengan menghubungi admin institusi.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Perbaikan Data</h3>
                  <p className="text-muted-foreground">
                    Permintaan perbaikan data harus diajukan ke admin institusi.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Penghapusan Data</h3>
                  <p className="text-muted-foreground">
                    Pengguna dapat meminta penghapusan data melalui admin institusi.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                7. Persyaratan Khusus
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Pengguna Dibawah Umur</h3>
                  <p className="text-muted-foreground">
                    Aplikasi ini tidak ditujukan untuk pengguna dibawah 18 tahun.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Pelacakan Produktivitas</h3>
                  <p className="text-muted-foreground">
                    Aplikasi memiliki fitur pelacakan kehadiran yang digunakan untuk mencatat produktivitas dasar.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Jangkauan Layanan</h3>
                  <p className="text-muted-foreground">
                    Layanan ini terutama ditujukan untuk pengguna di Indonesia.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                8. Perubahan Kebijakan
              </h2>
              <p className="text-muted-foreground">
                Kami akan memberitahukan perubahan kebijakan privasi melalui email 30 hari sebelum berlaku. 
                Penggunaan terus menerus setelah perubahan dianggap sebagai persetujuan terhadap revisi kebijakan.
              </p>
            </div>

            {/* Contact */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Pertanyaan Lebih Lanjut
              </h2>
              <p className="text-muted-foreground mb-4">
                Untuk pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami di:
              </p>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <strong>Email:</strong> scanhadir@gmail.com
                </p>
                <p className="text-muted-foreground">
                  <strong>Telepon:</strong> 081933875047
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Privacy;
