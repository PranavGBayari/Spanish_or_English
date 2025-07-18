
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WordOfTheDay from "./pages/WordOfTheDay";
import Practice from "./pages/Practice";
import Tenses from "./pages/Tenses";
import TenseDetail from "./pages/TenseDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Grammar from "./pages/Grammar";
import GrammarTopic from "./pages/GrammarTopic";
import Auth from "./pages/Auth"


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/grammar/:topicId" element={<GrammarTopic />} />
            <Route path="/word-of-the-day" element={<WordOfTheDay />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/tenses" element={<Tenses />} />
            <Route path="/tense/:tenseSlug" element={<TenseDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
