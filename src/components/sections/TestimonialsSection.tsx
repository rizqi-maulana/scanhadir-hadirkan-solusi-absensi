
import { siteData } from "@/data/siteData";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Apa Kata Pengguna Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Testimoni dari berbagai institusi yang telah merasakan manfaat ScanHadir
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-2xl border border-border hover:border-primary/20 hover:shadow-soft transition-all duration-300"
            >
              <div className="mb-6">
                <Quote className="h-8 w-8 text-primary/30" />
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.message}"
              </p>
              
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
