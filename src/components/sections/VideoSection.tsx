
import { siteData } from "@/data/siteData";

const VideoSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Lihat ScanHadir dalam Aksi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Video demonstrasi lengkap tentang cara kerja dan keunggulan ScanHadir
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elegant bg-black">
            <iframe
              src={siteData.video.url}
              title="ScanHadir Demo Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
