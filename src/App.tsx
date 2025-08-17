import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Engines from "./pages/Engines";
import EngineDetail from "./pages/EngineDetail";
import Paramotors from "./pages/Paramotors";
import Frames from "./pages/Frames";
import Service from "./pages/Service";
import ShippingWarranty from "./pages/ShippingWarranty";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Privacy from "./pages/Privacy";
import Offer from "./pages/Offer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/engines" element={<Engines />} />
            <Route path="/engines/mvl" element={<EngineDetail model="mvl" />} />
            <Route path="/engines/mv1" element={<EngineDetail model="mv1" />} />
            <Route path="/engines/mv2" element={<EngineDetail model="mv2" />} />
            <Route path="/engines/rs206" element={<EngineDetail model="rs206" />} />
            <Route path="/engines/rs185" element={<EngineDetail model="rs185" />} />
            <Route path="/engines/raptor-277" element={<EngineDetail model="raptor-277" />} />
            <Route path="/paramotors" element={<Paramotors />} />
            <Route path="/frames" element={<Frames />} />
            <Route path="/service" element={<Service />} />
            <Route path="/shipping-warranty" element={<ShippingWarranty />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/offer" element={<Offer />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
