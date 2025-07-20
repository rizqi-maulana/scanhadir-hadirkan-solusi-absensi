
import { siteData } from "@/data/siteData";

const CompaniesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Dipercaya oleh Berbagai Institusi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Lebih dari 100+ institusi telah mempercayakan sistem absensi mereka kepada ScanHadir
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.companies.map((company, index) => (
            <div 
              key={index}
              className="group p-6 bg-white rounded-2xl border border-border hover:border-primary/20 hover:shadow-soft transition-all duration-300 text-center"
            >
              <div className="mb-4">
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="h-16 w-16 mx-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {company.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {company.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
