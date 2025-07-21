import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Book, Server, Smartphone, Monitor, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Documentation = () => {
  const [activeSection, setActiveSection] = useState("installation");
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    {
      id: "installation",
      title: "Instalasi Server Institusi",
      icon: Server,
      category: "Mulai Cepat",
      content: `# Instalasi pada Server Institusi

## Persiapan Sistem

### Persyaratan Minimum
- **Sistem Operasi:** Windows Server 2016 atau lebih baru
- **RAM:** Minimum 4GB (disarankan 8GB)
- **Storage:** 50GB free space
- **Koneksi:** Internet stabil dengan bandwidth minimum 10 Mbps
- **Port:** 8080 (HTTP), 443 (HTTPS), 3306 (MySQL)

### Download Installer
1. Download ScanHadir Server dari link yang diberikan
2. Ekstrak file installer ke folder sementara
3. Pastikan file installer tidak corrupt dengan melakukan checksum

## Proses Instalasi

### 1. Menjalankan Installer
\`\`\`bash
# Klik kanan pada file installer
"Run as Administrator"
\`\`\`

### 2. Wizard Instalasi
- Pilih bahasa instalasi (Indonesia/English)
- Baca dan setujui License Agreement
- Pilih lokasi instalasi (default: C:\\Program Files\\ScanHadir)
- Pilih komponen yang akan diinstall

### 3. Konfigurasi Database
- Setup database lokal (MySQL/PostgreSQL)
- Masukkan informasi koneksi database:
  - Host: localhost
  - Port: 3306 (MySQL) / 5432 (PostgreSQL)
  - Username: root
  - Password: [password yang kuat]
  - Database Name: scanhadir_db

### 4. Test Koneksi
- Klik "Test Connection" untuk memastikan database terhubung
- Tunggu hingga status menunjukkan "Connected Successfully"

## Konfigurasi Task Scheduler

### Setup Auto-Start pada Windows
1. Buka Task Scheduler Windows (taskschd.msc)
2. Klik "Create Task" di panel Actions
3. Konfigurasi sebagai berikut:
   - **Name:** ScanHadir AutoStart
   - **Security Options:** Run with highest privileges
   - **Configure for:** Windows 10/Server 2016

### Trigger Settings
- **Begin the task:** At startup
- **Settings:** Enabled
- **Advanced settings:** Delay task for 30 seconds

### Action Settings
- **Action:** Start a program
- **Program:** C:\\Program Files\\ScanHadir\\ScanHadir.exe
- **Arguments:** --service
- **Start in:** C:\\Program Files\\ScanHadir

## Konfigurasi Firewall

### Windows Firewall Rules
\`\`\`powershell
# Buka PowerShell sebagai Administrator
New-NetFirewallRule -DisplayName "ScanHadir HTTP" -Direction Inbound -LocalPort 8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ScanHadir HTTPS" -Direction Inbound -LocalPort 443 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "ScanHadir MySQL" -Direction Inbound -LocalPort 3306 -Protocol TCP -Action Allow
\`\`\`

### Port Configuration
| Port | Protocol | Purpose | Access |
|------|----------|---------|---------|
| 8080 | HTTP | Web Interface | Internal |
| 443 | HTTPS | Secure Web | Public |
| 3306 | TCP | MySQL Database | Internal |

## Verifikasi Instalasi

### 1. Akses Web Interface
- Buka browser dan akses: http://localhost:8080
- Atau dari komputer lain: http://[server-ip]:8080

### 2. Login Admin Default
- **Username:** admin
- **Password:** ScanHadir2024!
- **Segera ubah password default** setelah login pertama

### 3. System Health Check
- Navigasi ke menu "System Status"
- Periksa status semua service:
  - ✅ Database Connection
  - ✅ Web Server
  - ✅ Background Services
  - ✅ File Permissions

### 4. Test Functionality
- Buat user test
- Generate QR Code test
- Test scanning functionality
- Verify data logging`
    },
    {
      id: "mobile-app",
      title: "Aplikasi ScanHadir Mobile",
      icon: Smartphone,
      category: "Aplikasi Mobile",
      content: `# Panduan Penggunaan ScanHadir Mobile

## Download dan Instalasi

### Download dari Play Store
1. Buka Google Play Store di perangkat Android
2. Cari "ScanHadir" di kolom pencarian
3. Pilih aplikasi dengan developer "ScanHadir Team"
4. Tap "Install" untuk download dan install otomatis
5. Aplikasi gratis untuk semua pengguna

### Persyaratan Sistem
- **Android:** Version 7.0 (API level 24) atau lebih tinggi
- **RAM:** Minimum 2GB
- **Storage:** 100MB free space
- **Permissions:** Location, Camera, Storage
- **Internet:** Koneksi WiFi atau data seluler

## Setup Awal

### Login Pertama Kali
1. Buka aplikasi ScanHadir
2. Pada layar welcome, tap "Mulai"
3. Masukkan informasi server:
   - **Server URL:** http://[ip-server]:8080
   - **Contoh:** http://192.168.1.100:8080
4. Masukkan kredensial login:
   - **Username:** [diberikan oleh admin]
   - **Password:** [diberikan oleh admin]
5. Tap "Login" dan tunggu proses sinkronisasi

### Izin Aplikasi
Aplikasi akan meminta izin untuk:
- **📍 Lokasi:** Untuk verifikasi kehadiran di area kerja
- **📷 Kamera:** Untuk fitur foto bukti (opsional)
- **💾 Storage:** Untuk menyimpan data offline

## Fitur Utama Aplikasi

### 1. Dashboard Utama
Setelah login, Anda akan melihat:
- **Status Hari Ini:** Waktu masuk, istirahat, pulang
- **QR Code Generator:** Tombol utama untuk generate QR
- **Lokasi Saat Ini:** Verifikasi GPS location
- **Riwayat Singkat:** 5 absensi terakhir

### 2. Absensi Masuk/Pulang
**Cara Absen Masuk:**
1. Pastikan Anda berada di area kantor (dalam radius yang ditentukan)
2. Tap tombol "Hadir" di dashboard utama
3. Aplikasi akan generate QR Code unik
4. Tunjukkan QR Code ke scanner di pintu masuk
5. Tunggu konfirmasi "Absensi Berhasil"
6. Status akan otomatis berubah menjadi "Sudah Absen Masuk"

**Cara Absen Pulang:**
1. Tap tombol "Pulang" saat shift kerja selesai
2. Generate QR Code untuk absen pulang
3. Scan di scanner pintu keluar
4. Aplikasi akan menghitung total jam kerja

### 3. Absensi Istirahat
**Mulai Istirahat:**
- Tap "Mulai Istirahat" sebelum meninggalkan area kerja
- QR Code akan ter-generate untuk konfirmasi
- Timer istirahat akan dimulai

**Selesai Istirahat:**
- Tap "Selesai Istirahat" saat kembali ke area kerja
- Scan QR Code untuk konfirmasi
- Sistem akan menghitung durasi istirahat
- Pastikan tidak melebihi batas waktu yang ditentukan

### 4. Absensi Lapangan
**Untuk Pekerjaan di Luar Kantor:**
1. Pilih menu "Absen Lapangan"
2. Masukkan informasi lokasi kerja:
   - **Nama Lokasi:** [alamat lengkap]
   - **Keterangan:** [deskripsi pekerjaan]
   - **Koordinat GPS:** [otomatis terdeteksi]
3. Upload foto bukti lokasi (opsional tapi direkomendasikan)
4. Tap "Submit Absen Lapangan"
5. Admin akan menerima notifikasi untuk verifikasi

### 5. Riwayat Absensi
**Melihat Riwayat:**
- Tap menu "Riwayat" di bottom navigation
- Filter berdasarkan:
  - **Periode:** Hari ini, Minggu ini, Bulan ini
  - **Jenis:** Masuk, Istirahat, Pulang, Lapangan
  - **Status:** Tepat waktu, Terlambat, Izin

**Detail Riwayat Mencakup:**
- ⏰ **Timestamp:** Waktu akurat absensi
- 📍 **Lokasi:** Koordinat GPS saat absen
- 🔄 **Status:** Berhasil, Pending, Ditolak
- 📊 **Statistik:** Total jam kerja, keterlambatan

## Tips dan Best Practices

### Optimasi Penggunaan
- **GPS Accuracy:** Pastikan GPS aktif dan signal kuat
- **Battery Saver:** Matikan battery saver saat menggunakan app
- **Update Rutin:** Selalu update app ke versi terbaru
- **Data Backup:** Riwayat tersimpan otomatis di server

### Troubleshooting Umum
**QR Code Tidak Muncul:**
- Periksa koneksi internet
- Restart aplikasi
- Clear cache aplikasi

**GPS Tidak Akurat:**
- Keluar ke area terbuka
- Restart GPS service
- Kalibrasi kompas perangkat

**Login Gagal:**
- Verifikasi Server URL dengan admin
- Pastikan username/password benar
- Cek koneksi ke server institusi`
    },
    {
      id: "admin-dashboard",
      title: "Dashboard Admin Desktop",
      icon: Monitor,
      category: "Dashboard Admin",
      content: `# Panduan Dashboard Admin ScanHadir

## Akses Dashboard

### Login Administrator
**Via Desktop Application:**
1. Double-click icon "ScanHadir Dashboard" di desktop
2. Aplikasi akan otomatis connect ke local server
3. Masukkan kredensial admin
4. Dashboard akan terbuka secara fullscreen

**Via Web Browser:**
1. Buka browser (Chrome/Firefox/Edge)
2. Navigate ke: http://localhost:8080/admin
3. Atau dari komputer lain: http://[server-ip]:8080/admin
4. Login dengan akun administrator

### Kredensial Default
- **Username:** admin
- **Password:** ScanHadir2024!
- ⚠️ **Wajib ubah password** setelah login pertama

## Dashboard Overview

### Statistik Real-time
Dashboard utama menampilkan:
- **👥 Total Karyawan:** Jumlah user aktif
- **✅ Hadir Hari Ini:** Karyawan yang sudah absen masuk
- **⏰ Terlambat:** Karyawan yang datang terlambat
- **🏠 Remote/Lapangan:** Karyawan yang bekerja di luar kantor
- **📊 Persentase Kehadiran:** Statistik kehadiran harian

### Grafik dan Analytics
- **📈 Trend Kehadiran:** Grafik mingguan/bulanan
- **⏱️ Peak Hours:** Jam sibuk absensi masuk/pulang
- **📍 Location Heatmap:** Peta sebaran absensi lapangan
- **🔄 Real-time Feed:** Live updates absensi

## Manajemen Pengguna

### Menambah Pengguna Baru
1. **Navigate ke Menu "Users"**
2. **Klik "Add New User"**
3. **Isi Form Data Karyawan:**
   \`\`\`
   Nama Lengkap: [sesuai KTP]
   Email: [email institusional]
   Nomor Telepon: [format: +62xxx]
   Department: [pilih dari dropdown]
   Position: [jabatan]
   Employee ID: [NIP/NRK]
   \`\`\`

4. **Upload Foto Profil:**
   - Format: JPG/PNG
   - Maksimal: 2MB
   - Resolusi: 300x300px minimum

5. **Set Role dan Permissions:**
   - **Employee:** Akses basic absensi
   - **Supervisor:** Dapat approve absensi lapangan
   - **Manager:** Akses laporan department
   - **Admin:** Full access sistem

6. **Generate QR Code:**
   - Sistem otomatis generate QR unik per user
   - QR Code dapat di-regenerate jika diperlukan
   - Print QR untuk ID card karyawan

### Edit Data Pengguna
**Update Informasi:**
1. Cari user melalui search bar atau filter
2. Klik nama pengguna dari daftar
3. Edit field yang diperlukan
4. Save changes dan notifikasi akan dikirim ke user

**Reset Password:**
1. Pilih user yang akan di-reset
2. Klik "Reset Password"
3. Generate temporary password
4. Send via email atau berikan langsung ke user

**Deaktivasi User:**
- Toggle status "Active/Inactive"
- User inactive tidak bisa login
- Data histori tetap tersimpan

## Laporan dan Analytics

### Generate Laporan Absensi
**Filter Laporan:**
1. **Periode Waktu:**
   - Harian: Pilih tanggal spesifik
   - Mingguan: Pilih range minggu
   - Bulanan: Pilih bulan dan tahun
   - Custom: Set start dan end date

2. **Filter Department:**
   - All Departments
   - Specific Department
   - Multiple Departments

3. **Filter Karyawan:**
   - All Employees
   - Specific Employee
   - By Position Level

**Jenis Laporan:**
- **📋 Summary Report:** Overview kehadiran
- **📊 Detailed Report:** Detail per karyawan
- **📈 Analytics Report:** Grafik dan trend
- **🌍 Location Report:** Absensi berdasarkan lokasi

**Export Options:**
- **📄 PDF:** Untuk presentasi dan arsip
- **📊 Excel:** Untuk analisis lanjut
- **📧 Email:** Kirim langsung via email
- **☁️ Cloud:** Upload ke cloud storage

### Monitoring Real-time
**Live Dashboard Features:**
- **🔴 Live Status:** Siapa yang sedang online
- **📍 GPS Tracking:** Lokasi real-time karyawan lapangan
- **⚡ Instant Alerts:** Notifikasi keterlambatan
- **📱 Device Status:** Status aplikasi mobile karyawan

## Pengaturan Sistem

### Konfigurasi Jam Kerja
**Setup Shift Kerja:**
\`\`\`
Jam Masuk: 08:00 WIB
Toleransi Terlambat: 15 menit
Jam Istirahat: 12:00 - 13:00 WIB
Jam Pulang: 17:00 WIB
Overtime Threshold: 18:00 WIB
\`\`\`

**Multiple Shift Support:**
- Shift Pagi: 06:00 - 14:00
- Shift Siang: 14:00 - 22:00
- Shift Malam: 22:00 - 06:00

### Konfigurasi Lokasi Kantor
**Set GPS Coordinates:**
1. Klik "Office Location Settings"
2. Input koordinat GPS kantor utama:
   - **Latitude:** -6.200000
   - **Longitude:** 106.816666
3. Set radius toleransi: 100 meter (default)
4. Add multiple locations untuk cabang

**Geofencing Setup:**
- **Green Zone:** Area kantor utama
- **Yellow Zone:** Area parking/sekitar kantor
- **Red Zone:** Di luar area yang diizinkan

### Backup dan Restore
**Automated Backup:**
- **Schedule:** Daily pada jam 02:00 WIB
- **Retention:** 30 hari backup history
- **Location:** Local server + cloud backup
- **Encryption:** AES-256 encryption

**Manual Backup:**
1. Navigate ke "System Settings"
2. Klik "Create Backup Now"
3. Pilih data yang akan di-backup:
   - User data
   - Attendance records
   - System configurations
4. Download backup file (.zip)

## Fitur Lanjutan

### Integration dengan Sistem Lain
**Payroll Integration:**
- Export data ke format payroll system
- API endpoint untuk real-time data sync
- Custom field mapping

**Email Notifications:**
- Setup SMTP server untuk email alerts
- Customize email templates
- Schedule automated reports

**API Access:**
- REST API untuk integrasi custom
- Authentication via API key
- Rate limiting dan security controls

### Multi-location Management
**Cabang/Branch Support:**
- Manage multiple office locations
- Different working hours per location
- Location-specific reports
- Inter-branch transfer handling

### Advanced Analytics
**Predictive Analytics:**
- Attendance pattern analysis
- Early warning untuk absenteeism
- Performance correlation reports
- Seasonal trend analysis`
    }
  ];

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentSection = sections.find(section => section.id === activeSection);

  const categories = [...new Set(sections.map(s => s.category))];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dokumentasi</h1>
              <p className="text-muted-foreground">Panduan lengkap penggunaan ScanHadir</p>
            </div>
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari dokumentasi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-32 bg-background/95 backdrop-blur border border-border rounded-lg p-4">
              {categories.map((category) => (
                <div key={category} className="mb-6">
                  <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3 px-3">
                    {category}
                  </h3>
                  <div className="space-y-1">
                    {sections
                      .filter(section => section.category === category)
                      .map((section) => {
                        const Icon = section.icon;
                        return (
                          <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-md transition-colors text-sm ${
                              activeSection === section.id
                                ? "bg-primary text-primary-foreground font-medium"
                                : "hover:bg-muted text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            <Icon className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate">
                              {section.title}
                            </span>
                          </button>
                        );
                      })}
                  </div>
                </div>
              ))}

              <div className="border-t border-border pt-4">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="/download">
                    Download Apps
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="bg-background border border-border rounded-lg">
              {currentSection && (
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <currentSection.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h1 className="text-3xl font-bold text-foreground">
                        {currentSection.title}
                      </h1>
                      <p className="text-muted-foreground">{currentSection.category}</p>
                    </div>
                  </div>
                  
                  <div className="prose prose-neutral dark:prose-invert max-w-none">
                    <div 
                      dangerouslySetInnerHTML={{ 
                        __html: currentSection.content
                          .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold text-foreground mb-6 mt-8 first:mt-0">$1</h1>')
                          .replace(/^## (.+)$/gm, '<h2 class="text-xl font-semibold text-foreground mt-8 mb-4">$1</h2>')
                          .replace(/^### (.+)$/gm, '<h3 class="text-lg font-medium text-foreground mt-6 mb-3">$1</h3>')
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
                          .replace(/`([^`]+)`/g, '<code class="bg-muted px-2 py-1 rounded text-sm font-mono text-foreground border">$1</code>')
                          .replace(/```([\s\S]*?)```/g, '<pre class="bg-muted p-4 rounded-lg text-sm font-mono overflow-x-auto text-foreground border my-4"><code>$1</code></pre>')
                          .replace(/^\| (.+) \|$/gm, (match) => {
                            const cells = match.slice(2, -2).split(' | ');
                            return '<tr>' + cells.map(cell => `<td class="border border-border px-3 py-2 text-sm">${cell}</td>`).join('') + '</tr>';
                          })
                          .replace(/^- (.+)$/gm, '<li class="text-muted-foreground ml-4">$1</li>')
                          .replace(/^\d+\. (.+)$/gm, '<li class="text-muted-foreground ml-4 list-decimal">$1</li>')
                          .replace(/\n\n(?!<)/g, '</p><p class="text-muted-foreground mb-4">')
                          .replace(/^(?!<[h|l|p|c|t])(.*?)$/gm, '<p class="text-muted-foreground mb-4">$1</p>')
                      }} 
                    />
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
                    <div>
                      {sections.findIndex(s => s.id === activeSection) > 0 && (
                        <Button variant="outline" onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === activeSection);
                          setActiveSection(sections[currentIndex - 1].id);
                        }}>
                          ← Sebelumnya
                        </Button>
                      )}
                    </div>
                    <div>
                      {sections.findIndex(s => s.id === activeSection) < sections.length - 1 && (
                        <Button onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === activeSection);
                          setActiveSection(sections[currentIndex + 1].id);
                        }}>
                          Selanjutnya →
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Documentation;