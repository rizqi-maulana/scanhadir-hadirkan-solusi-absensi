import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Apakah ScanHadir gratis?",
      answer: "ScanHadir menggunakan model berlangganan Rp 1.000.000 per bulan yang sudah termasuk instalasi, support, dan update berkelanjutan. Download aplikasi mobile gratis di Play Store."
    },
    {
      question: "Bagaimana cara kerja sistem QR Code?",
      answer: "Setiap pengguna memiliki QR Code unik yang berubah secara berkala. Sistem juga memverifikasi lokasi GPS untuk memastikan kehadiran di tempat yang tepat."
    },
    {
      question: "Apakah data absensi aman?",
      answer: "Ya, semua data tersimpan di server institusi Anda sendiri dengan enkripsi tingkat tinggi. Kami tidak menyimpan data sensitif di server eksternal."
    },
    {
      question: "Bisakah digunakan untuk absensi lapangan?",
      answer: "Tentu saja! ScanHadir mendukung absensi lapangan dengan fitur verifikasi lokasi yang fleksibel untuk pekerjaan di luar kantor."
    },
    {
      question: "Apa saja aplikasi yang perlu diinstall?",
      answer: "Ada 3 aplikasi: ScanHadir Mobile (untuk karyawan), ScanHadir Scanner (untuk admin memindai), dan ScanHadir Dashboard (desktop admin)."
    },
    {
      question: "Bagaimana jika ada masalah teknis?",
      answer: "Tim support kami siap membantu 24/7 melalui email dan WhatsApp. Support teknis sudah termasuk dalam biaya berlangganan."
    },
    {
      question: "Apakah ada batasan jumlah pengguna?",
      answer: "Tidak ada batasan jumlah pengguna dalam sistem ScanHadir. Anda bisa menambahkan karyawan sebanyak yang dibutuhkan."
    },
    {
      question: "Bagaimana proses instalasi?",
      answer: "Tim kami akan membantu instalasi lengkap di server institusi Anda. Proses instalasi dan konfigurasi awal sudah termasuk dalam paket berlangganan."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-xl text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum tentang ScanHadir
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;