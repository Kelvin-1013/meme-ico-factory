import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Assets from "./pages/Assets";
import Dashboard from "./pages/Dashboard";
import Launchpad from "./pages/Launchpad";
import Staking from "./pages/Staking";
import Documentation from "./pages/Documentation";
import "./i18n/config";

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
            <Route path="/assets" element={<Assets />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/launchpad" element={<Launchpad />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/docs" element={<Documentation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;