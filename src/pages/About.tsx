import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-primary/5 via-white to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tentang ScanHadir
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Perjalanan dari proyek iseng siswa SMK hingga menjadi solusi absensi terpercaya untuk puluhan institusi
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-br from-white to-primary/5 border-primary/20 shadow-elegant">
            <CardContent className="p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground">
                  Cerita di Balik ScanHadir
                </h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Awalnya, ini hanya proyek iseng seorang siswa SMK kelas 12 saat PKL di kampus. 
                  Saat diminta menitipkan absen untuk orang tua yang bekerja sebagai dosen, saya 
                  menyadari betapa mudahnya sistem absensi 'klik tombol' dimanipulasi.
                </p>
                
                <p>
                  Obrolan santai dengan teman di kantor pun memicu ide: "Bagaimana kalau kita buat 
                  aplikasi absensi yang tidak bisa ditipu?" Setelah melalui riset kecil-kecilan, 
                  kami memutuskan menggunakan QR Code yang terus berubah untuk mencegah kecurangan.
                </p>
                
                <p>
                  Proses pengembangannya tidak instan. Butuh 6 bulan trial and error, kolaborasi 
                  dengan teman (Dirwa untuk desain web dan Pasya untuk konten kreatif), serta tekad 
                  kuat untuk menyelesaikan aplikasi ini. Dari sekadar latihan skill, ScanHadir 
                  akhirnya tumbuh menjadi solusi yang digunakan puluhan institusi.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-20 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nilai-Nilai Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Prinsip yang memandu kami dalam mengembangkan ScanHadir
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Inovasi Berkelanjutan
                </h3>
                <p className="text-muted-foreground">
                  Selalu mencari cara baru untuk meningkatkan keamanan dan kemudahan sistem absensi
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Fokus Pengguna
                </h3>
                <p className="text-muted-foreground">
                  Mengutamakan kemudahan penggunaan dan kepuasan institusi yang menggunakan ScanHadir
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-border/50 shadow-soft hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-6">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Kualitas Terjamin
                </h3>
                <p className="text-muted-foreground">
                  Komitmen untuk memberikan layanan berkualitas tinggi dengan dukungan yang responsif
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ScanHadir dalam Angka
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Institusi Pengguna</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">10K+</div>
              <div className="text-muted-foreground">Pengguna Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Server</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Dukungan Teknis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Misi Kami
          </h2>
          <p className="text-xl leading-relaxed">
            Menyediakan solusi absensi yang aman, mudah digunakan, dan dapat diandalkan 
            untuk membantu institusi di Indonesia mengelola kehadiran dengan lebih efisien 
            dan transparan.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;