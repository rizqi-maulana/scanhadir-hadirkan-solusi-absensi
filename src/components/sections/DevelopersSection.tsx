
import { siteData } from "@/data/siteData";
import { Linkedin, Github } from "lucide-react";

const DevelopersSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tim Pengembang
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dibangun oleh tim profesional yang berpengalaman dalam teknologi dan pengembangan sistem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {siteData.developers.map((developer, index) => (
            <div 
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6">
                <img 
                  src={developer.photo}
                  alt={developer.name}
                  className="h-32 w-32 rounded-full object-cover mx-auto shadow-elegant group-hover:shadow-soft transition-shadow"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {developer.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {developer.role}
              </p>
              
              <div className="flex justify-center space-x-4">
                {developer.linkedin && (
                  <a 
                    href={developer.linkedin}
                    className="p-2 bg-white rounded-full border border-border hover:border-primary/20 hover:shadow-soft transition-all"
                  >
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                )}
                {developer.github && (
                  <a 
                    href={developer.github}
                    className="p-2 bg-white rounded-full border border-border hover:border-primary/20 hover:shadow-soft transition-all"
                  >
                    <Github className="h-5 w-5 text-primary" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopersSection;
