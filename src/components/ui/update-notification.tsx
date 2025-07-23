import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Sparkles, X } from "lucide-react";

interface UpdateNotificationProps {
  version?: string;
  features?: string[];
}

export const UpdateNotification = ({ 
  version = "2.1.0", 
  features = ["Peningkatan performa", "Fitur baru ScanHadir", "Perbaikan bug"] 
}: UpdateNotificationProps) => {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user has seen this version update
    const lastSeenVersion = localStorage.getItem('lastSeenUpdateVersion');
    
    if (lastSeenVersion !== version && !dismissed) {
      // Show update notification after a short delay
      const timer = setTimeout(() => {
        toast({
          title: "🎉 Update Tersedia!",
          description: `Versi ${version} telah tersedia dengan fitur baru: ${features.join(", ")}`,
          duration: 8000,
          action: (
            <div className="flex gap-2">
              <Button 
                size="sm" 
                onClick={() => {
                  localStorage.setItem('lastSeenUpdateVersion', version);
                  window.location.reload();
                }}
              >
                Refresh
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  localStorage.setItem('lastSeenUpdateVersion', version);
                  setDismissed(true);
                }}
              >
                Nanti
              </Button>
            </div>
          ),
        });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [version, features, dismissed]);

  return null;
};