import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

  if (dismissed) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-b">
      <div className="container mx-auto px-4 py-3">
        <Card className="bg-background/80 backdrop-blur-sm border-primary/20">
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Update Tersedia - Versi {version}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {features.join(" • ")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  size="sm"
                  asChild
                >
                  <Link to="/updates">
                    Lihat Update
                  </Link>
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => {
                    localStorage.setItem('lastSeenUpdateVersion', version);
                    setDismissed(true);
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};