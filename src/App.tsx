
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SqlInjection from "./pages/SqlInjection";
import XssVulnerability from "./pages/XssVulnerability";
import FileUploadVulnerability from "./pages/FileUploadVulnerability";
import CsrfVulnerability from "./pages/CsrfVulnerability";
import IdorVulnerability from "./pages/IdorVulnerability";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<SqlInjection />} />
            <Route path="/message-board" element={<XssVulnerability />} />
            <Route path="/file-upload" element={<FileUploadVulnerability />} />
            <Route path="/user-profile" element={<CsrfVulnerability />} />
            <Route path="/admin" element={<IdorVulnerability />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
