
import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Book, Server, Smartphone, Monitor, ChevronRight } from "lucide-react";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("installation");

  const sections = [
    {
      id: "installation",
      title: "Instalasi Server Institusi",
      icon: Server,
      content: `
# Instalasi pada Server Institusi

## Persiapan Sistem
1. **Persyaratan Minimum:**
   - Windows Server 2016 atau lebih baru
   - RAM minimum 4GB (disarankan 8GB)
   - Storage 50GB free space
   - Koneksi internet stabil

2. **Download Installer:**
   - Download ScanHadir Server dari link yang diberikan
   - Ekstrak file installer ke folder sementara

## Proses Instalasi
1. **Jalankan Installer:**
   - Klik kanan pada file installer → "Run as Administrator"
   - Ikuti wizard instalasi
   - Pilih lokasi instalasi (default: C:\\Program Files\\ScanHadir)

2. **Konfigurasi Database:**
   - Setup database lokal (MySQL/PostgreSQL)
   - Masukkan informasi koneksi database
   - Test koneksi untuk memastikan berhasil

3. **Konfigurasi Task Scheduler:**
   - Buka Task Scheduler Windows
   - Buat New Task dengan nama "ScanHadir AutoStart"
   - Set trigger: "At startup"
   - Set action: Path ke ScanHadir.exe
   - Enable "Run with highest privileges"

## Konfigurasi Firewall
- Port 8080: untuk web interface
- Port 3306: untuk database (jika menggunakan MySQL)
- Port 443: untuk HTTPS (disarankan)

## Verifikasi Instalasi
- Akses http://localhost:8080
- Login dengan kredensial admin default
- Ubah password default
- Test semua fitur utama
      `
    },
    {
      id: "mobile-app",
      title: "Aplikasi ScanHadir Mobile",
      icon: Smartphone,
      content: `
# Panduan Penggunaan ScanHadir Mobile

## Download dan Instalasi
1. **Download dari Play Store:**
   - Cari "ScanHadir" di Google Play Store
   - Install aplikasi (gratis untuk pengguna)

2. **Login Pertama Kali:**
   - Buka aplikasi ScanHadir
   - Masukkan Server URL (diberikan oleh admin)
   - Masukkan username dan password
   - Aplikasi akan sync dengan server

## Fitur Utama Aplikasi

### 1. Absensi Masuk/Pulang
- Tap tombol "Hadir" untuk absen masuk
- Aplikasi akan menampilkan QR Code unik
- Pastikan lokasi GPS aktif untuk verifikasi
- Tunggu konfirmasi berhasil

### 2. Absensi Istirahat
- Gunakan tombol "Mulai Istirahat" dan "Selesai Istirahat"
- Sistem akan menghitung durasi istirahat
- Laporan otomatis tersimpan

### 3. Absensi Lapangan
- Pilih "Absen Lapangan" jika bekerja di luar kantor
- Masukkan keterangan lokasi kerja
- Upload foto sebagai bukti (opsional)

### 4. Riwayat Absensi
- Lihat riwayat absensi harian, mingguan, bulanan
- Detail waktu masuk, istirahat, dan pulang
- Status kehadiran dan keterlambatan

## Tips Penggunaan
- Pastikan GPS dan internet aktif
- Update aplikasi secara berkala
- Laporkan masalah ke admin jika ada error
      `
    },
    {
      id: "admin-dashboard",
      title: "Dashboard Admin Desktop",
      icon: Monitor,
      content: `
# Panduan Dashboard Admin ScanHadir

## Akses Dashboard
1. **Login Admin:**
   - Buka ScanHadir Dashboard dari desktop
   - Atau akses via browser: http://localhost:8080/admin
   - Login dengan akun administrator

## Menu Utama Dashboard

### 1. Dashboard Overview
- **Statistik Harian:** Jumlah hadir, terlambat, izin
- **Grafik Kehadiran:** Trend kehadiran mingguan/bulanan  
- **Alert System:** Notifikasi keterlambatan dan absensi

### 2. Manajemen Pengguna
- **Tambah Pengguna Baru:**
  - Klik "Add User" → Isi form data karyawan
  - Upload foto profil
  - Set role dan department
  - Generate QR Code unik

- **Edit Data Pengguna:**
  - Klik nama pengguna dari daftar
  - Update informasi yang diperlukan
  - Reset password jika diperlukan

### 3. Laporan Absensi
- **Filter Laporan:**
  - Pilih periode (harian/mingguan/bulanan)
  - Filter berdasarkan department
  - Export ke Excel/PDF

- **Detail Laporan:**
  - Waktu masuk/pulang setiap karyawan
  - Total jam kerja
  - Keterlambatan dan absensi
  - Lokasi GPS saat absen

### 4. Pengaturan Sistem
- **Jam Kerja:** Set jam masuk, istirahat, pulang
- **Toleransi Keterlambatan:** Atur batas waktu terlambat
- **Lokasi Kantor:** Set koordinat GPS kantor
- **Backup Database:** Schedule backup otomatis

## Fitur Lanjutan
- **Real-time Monitoring:** Pantau absensi secara real-time
- **Notifikasi Email:** Setup email alert untuk keterlambatan
- **Integration API:** Koneksi dengan sistem payroll
- **Multi-location:** Support untuk cabang/lokasi multiple
      `
    }
  ];

  const currentSection = sections.find(section => section.id === activeSection);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Dokumentasi ScanHadir
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Panduan lengkap instalasi, konfigurasi, dan penggunaan sistem absensi ScanHadir
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-border p-6 sticky top-24">
                <h3 className="font-semibold mb-4 text-foreground">Daftar Isi</h3>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all ${
                          activeSection === section.id
                            ? "bg-primary text-white"
                            : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                        }`}
                      >
                        <IconComponent className="h-5 w-5" />
                        <span className="text-sm font-medium">{section.title}</span>
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-border p-8">
                {currentSection && (
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <currentSection.icon className="h-8 w-8 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">
                        {currentSection.title}
                      </h2>
                    </div>
                    
                    <div className="prose prose-lg max-w-none">
                      <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed">
                        {currentSection.content}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;
