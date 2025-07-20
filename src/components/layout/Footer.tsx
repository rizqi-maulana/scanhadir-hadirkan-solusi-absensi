
import { Link } from "react-router-dom";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { siteData } from "@/data/siteData";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/fe549b53-7875-4682-bbca-42ddf53c5d33.png" 
                alt="ScanHadir Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-primary">ScanHadir</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Solusi absensi modern yang menghadirkan efisiensi dan keakuratan untuk institusi Anda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm">Beranda</Link></li>
              <li><Link to="/fitur" className="text-muted-foreground hover:text-primary text-sm">Fitur</Link></li>
              <li><Link to="/harga" className="text-muted-foreground hover:text-primary text-sm">Harga</Link></li>
              <li><Link to="/dokumentasi" className="text-muted-foreground hover:text-primary text-sm">Dokumentasi</Link></li>
              <li><Link to="/tentang" className="text-muted-foreground hover:text-primary text-sm">Tentang</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm">Kebijakan Privasi</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary text-sm">Syarat & Ketentuan</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <a 
                href={`mailto:${siteData.contact.email}`}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary text-sm"
              >
                <Mail className="h-4 w-4" />
                <span>{siteData.contact.email}</span>
              </a>
              <a 
                href={`tel:${siteData.contact.phone}`}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary text-sm"
              >
                <Phone className="h-4 w-4" />
                <span>{siteData.contact.phone}</span>
              </a>
              <a 
                href={`https://wa.me/${siteData.contact.whatsapp}`}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 ScanHadir. Hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
