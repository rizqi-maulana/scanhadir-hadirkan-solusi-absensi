import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Shield } from "lucide-react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Syarat & Ketentuan
          </h1>
          <div className="flex items-center justify-center text-muted-foreground">
            <span>Terakhir diperbarui: 24 Juni 2025</span>
          </div>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none">

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Informasi Umum</h2>
              <p className="text-muted-foreground leading-relaxed">
                Aplikasi ScanHadir ("Aplikasi") dikembangkan dan dioperasikan oleh InnovYouth ("Kami") dengan alamat:<br />
                Jl. Sakura IV No. 23, Gomong Sakura, Selaparang, Lombok, Indonesia.<br />
                Kontak: scanhadir@gmail.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Lisensi & Penggunaan</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-medium text-foreground mb-2">2.1 Akses Aplikasi</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Aplikasi versi 2.0.0 untuk Android dan desktop disediakan gratis</li>
                  <li>Layanan premium (jasa) dikenakan biaya sesuai paket</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">2.2 Pembatasan</h3>
                <p className="text-muted-foreground mb-2">Pengguna dilarang:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Melakukan reverse engineering</li>
                  <li>Menyalahgunakan fitur absensi</li>
                  <li>Menggunakan Aplikasi untuk aktivitas ilegal</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Pengumpulan Data</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-medium text-foreground mb-2">3.1 Jenis Data</h3>
                <p className="text-muted-foreground mb-2">Kami mengumpulkan:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Data profil (nama, email institusi)</li>
                  <li>Data absensi (waktu, lokasi GPS)</li>
                  <li>Data perangkat (model, OS)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">3.2 Tujuan Penggunaan</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Validasi absensi</li>
                  <li>Penyempurnaan profil pengguna</li>
                  <li>Pengiriman notifikasi</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Ketentuan Khusus</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-medium text-foreground mb-2">4.1 Persyaratan Usia</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Minimal 17 tahun atau sesuai kebijakan institusi</li>
                  <li>Pengguna di bawah umur wajib izin orang tua/wali</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">4.2 Akun Institusi</h3>
                <p className="text-muted-foreground mb-2">Setiap institusi bertanggung jawab atas:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Verifikasi data anggota</li>
                  <li>Keamanan akses admin</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Pembayaran & Refund</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-medium text-foreground mb-2">5.1 Metode Pembayaran</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Transfer bank (dalam Rupiah)</li>
                  <li>Pembayaran lain yang disepakati</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-medium text-foreground mb-2">5.2 Kebijakan Pengembalian Dana</h3>
                <p className="text-muted-foreground mb-2">Klaim refund hanya berlaku jika:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Layanan tidak digunakan sama sekali dalam 30 hari</li>
                  <li>Disertai bukti transaksi</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Hak Kekayaan Intelektual</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Seluruh konten dalam Aplikasi adalah milik InnovYouth</li>
                <li>Dilarang menggunakan merek/logo ScanHadir tanpa izin tertulis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Penyelesaian Sengketa</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Hukum yang berlaku: Hukum Republik Indonesia</li>
                <li>Sengketa diselesaikan melalui jalur musyawarah atau Pengadilan Negeri Mataram</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Perubahan Ketentuan</h2>
              <p className="text-muted-foreground mb-2">Kami dapat memperbarui Syarat & Ketentuan ini dengan pemberitahuan melalui:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Email ke admin institusi</li>
                <li>Notifikasi dalam Aplikasi</li>
              </ul>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">PENGAKUAN</h2>
              <p className="text-muted-foreground italic">
                "Dengan menggunakan Aplikasi, Anda menyetujui seluruh ketentuan di atas."
              </p>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Hubungi Kami:</h2>
              <div className="text-muted-foreground space-y-1">
                <p>scanhadir@gmail.com</p>
                <p>+62 819-3387-5047</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;