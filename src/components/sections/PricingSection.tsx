
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { siteData } from "@/data/siteData";

const PricingSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Paket Berlangganan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Investasi terbaik untuk sistem absensi modern di institusi Anda
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white p-8 rounded-2xl border-2 border-primary shadow-elegant">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                ScanHadir Professional
              </h3>
              <div className="flex items-baseline justify-center space-x-1 mb-4">
                <span className="text-4xl font-bold text-primary">
                  Rp {parseInt(siteData.app.price).toLocaleString('id-ID')}
                </span>
                <span className="text-muted-foreground">/{siteData.app.period}</span>
              </div>
              <p className="text-muted-foreground">
                Solusi lengkap untuk kebutuhan absensi institusi
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {siteData.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="w-full text-lg py-3">
              <Link to="/download">
                Mulai Berlangganan
              </Link>
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              * Harga sudah termasuk instalasi dan support penuh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
