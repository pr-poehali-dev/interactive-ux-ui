
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import LawAllowed from "./pages/LawAllowed";
import MoralRequired from "./pages/MoralRequired";
import Conscience from "./pages/Conscience";
import Choice from "./pages/Choice";
import Survey from "./pages/Survey";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/law-allowed" element={<LawAllowed />} />
          <Route path="/moral-required" element={<MoralRequired />} />
          <Route path="/conscience" element={<Conscience />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/survey" element={<Survey />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;