
// Data struktur untuk website ScanHadir
export interface Company {
  name: string;
  logo: string;
  type: string;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  message: string;
  avatar: string;
}

export interface Developer {
  name: string;
  role: string;
  photo: string;
  linkedin?: string;
  github?: string;
}

export const siteData = {
  // Informasi Aplikasi
  app: {
    name: "ScanHadir",
    scannerName: "ScanHadir Scanner",
    dashboardName: "ScanHadir Dashboard",
    tagline: "Solusi Absensi Modern untuk Institusi",
    description: "Sistem absensi berbasis QR Code dengan keamanan tinggi dan fitur lokasi yang akurat untuk berbagai jenis institusi.",
    price: "1.000.000",
    currency: "IDR",
    period: "per bulan"
  },

  // Fitur Utama
  features: [
    {
      title: "Absensi QR Code",
      description: "Sistem absensi praktis menggunakan QR Code yang unik untuk setiap pengguna",
      icon: "QrCode"
    },
    {
      title: "Verifikasi Lokasi",
      description: "Pastikan kehadiran di lokasi institusi dengan teknologi GPS yang akurat",
      icon: "MapPin"
    },
    {
      title: "Absensi Lapangan",
      description: "Dukungan khusus untuk pekerjaan lapangan dengan fleksibilitas lokasi",
      icon: "Navigation"
    },
    {
      title: "Keamanan Data",
      description: "Data tersimpan aman di server institusi dengan enkripsi tingkat tinggi",
      icon: "Shield"
    },
    {
      title: "Dashboard Admin",
      description: "Kelola semua data absensi dengan dashboard yang intuitif dan mudah digunakan",
      icon: "BarChart3"
    },
    {
      title: "Real-time Monitoring",
      description: "Pantau kehadiran karyawan secara real-time dengan notifikasi instan",
      icon: "Clock"
    }
  ],

  // Keuntungan Berlangganan
  benefits: [
    "Installer pertama kali gratis",
    "Layanan dukungan 24/7",
    "Update rutin dan berkelanjutan",
    "Keamanan data terjamin",
    "Akses pengguna tidak terbatas"
  ],

  // Perusahaan yang Menggunakan
  companies: [
    {
      name: "PT Teknologi Maju",
      logo: "/lovable-uploads/fe549b53-7875-4682-bbca-42ddf53c5d33.png",
      type: "Perusahaan Teknologi"
    },
    {
      name: "SMK Negeri 1 Jakarta",
      logo: "/lovable-uploads/fe549b53-7875-4682-bbca-42ddf53c5d33.png",
      type: "Institusi Pendidikan"
    },
    {
      name: "RS Sehat Sentosa",
      logo: "/lovable-uploads/fe549b53-7875-4682-bbca-42ddf53c5d33.png",
      type: "Rumah Sakit"
    },
    {
      name: "Bank Mandiri Cabang Surabaya",
      logo: "/lovable-uploads/fe549b53-7875-4682-bbca-42ddf53c5d33.png",
      type: "Perbankan"
    },
    {
      name: "PT Manufaktur Indonesia",
      logo: "/lovable-uploads/fe549b53-7875-4682-bbca-42ddf53c5d33.png",
      type: "Manufaktur"
    },
    {
      name: "Universitas Bina Nusantara",
      logo: "/lovable-uploads/fe549b53-7875-4682-bbca-42ddf53c5d33.png",
      type: "Universitas"
    }
  ],

  // Testimoni
  testimonials: [
    {
      name: "Andi Setiawan",
      position: "HRD Manager",
      company: "PT Teknologi Maju",
      message: "ScanHadir sangat membantu dalam mengelola absensi karyawan. Fitur lokasi GPS memastikan karyawan benar-benar hadir di tempat kerja.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Dr. Sarah Wijaya",
      position: "Kepala Administrasi",
      company: "RS Sehat Sentosa",
      message: "Implementasi ScanHadir di rumah sakit kami berjalan lancar. Sistem yang mudah digunakan dan support team yang responsif.",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Prof. Budi Hartono",
      position: "Wakil Rektor",
      company: "Universitas Bina Nusantara",
      message: "Keamanan data yang terjamin dan fitur laporan yang lengkap membuat ScanHadir menjadi pilihan terbaik untuk institusi pendidikan.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ],

  // Developer Team
  developers: [
    {
      name: "Rizqi Muhammad",
      role: "Lead Developer & Project Manager",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Sari Dewi",
      role: "UI/UX Designer",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b282?w=200&h=200&fit=crop&crop=face",
      linkedin: "#"
    },
    {
      name: "Ahmad Fauzi",
      role: "Backend Developer",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      github: "#"
    }
  ],

  // Kontak
  contact: {
    email: "scanhadir@gmail.com",
    phone: "081933875047",
    whatsapp: "6281933875047"
  },

  // Link Download
  downloads: {
    playstore: "#",
    windows: "#",
    scanner: "#" // Khusus untuk institusi
  },

  // App Screenshots
  screenshots: {
    mobile: [
      "/lovable-uploads/b3d23025-f156-4be9-a1eb-7adf887da269.png",
      "/lovable-uploads/b3d23025-f156-4be9-a1eb-7adf887da269.png",
      "/lovable-uploads/b3d23025-f156-4be9-a1eb-7adf887da269.png",
      "/lovable-uploads/b3d23025-f156-4be9-a1eb-7adf887da269.png",
      "/lovable-uploads/b3d23025-f156-4be9-a1eb-7adf887da269.png",
      "/lovable-uploads/b3d23025-f156-4be9-a1eb-7adf887da269.png"
    ],
    scanner: [
      "/lovable-uploads/94e5ba83-6cfc-455c-8504-5cf74d301853.png",
      "/lovable-uploads/94e5ba83-6cfc-455c-8504-5cf74d301853.png"
    ],
    desktop: [
      "/lovable-uploads/4768d38b-7403-49c2-b48e-7c57f2cf1c05.png",
      "/lovable-uploads/4768d38b-7403-49c2-b48e-7c57f2cf1c05.png",
      "/lovable-uploads/4768d38b-7403-49c2-b48e-7c57f2cf1c05.png",
      "/lovable-uploads/4768d38b-7403-49c2-b48e-7c57f2cf1c05.png",
      "/lovable-uploads/4768d38b-7403-49c2-b48e-7c57f2cf1c05.png",
      "/lovable-uploads/4768d38b-7403-49c2-b48e-7c57f2cf1c05.png"
    ]
  },

  // Video Marketing
  video: {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Ganti dengan URL video Anda
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=450&fit=crop"
  }
};
