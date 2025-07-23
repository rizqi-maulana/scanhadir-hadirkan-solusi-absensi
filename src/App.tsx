
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Documentation from "./pages/Documentation";
import Privacy from "./pages/Privacy";
import Download from "./pages/Download";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Updates from "./pages/Updates";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fitur" element={<Index />} />
          <Route path="/harga" element={<Index />} />
          <Route path="/dokumentasi" element={<Documentation />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/download" element={<Download />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/pembaruan" element={<Updates />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/syarat-ketentuan" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
