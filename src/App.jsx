import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnnouncementBar from "./components/AnnouncementBar";
import LoginModal from "./components/LoginModal";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Speakers from "./pages/Speakers";
import SpeakerDetail from "./pages/SpeakerDetail";
import Sponsors from "./pages/Sponsors";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Venue from "./pages/Venue";
import Tickets from "./pages/Tickets";
import ExhibitorDashboard from "./pages/ExhibitorDashboard";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen font-body">
        <ScrollToTop />
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/speakers/:id" element={<SpeakerDetail />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/exhibitor/dashboard" element={<ExhibitorDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <LoginModal />
      </div>
    </AuthProvider>
  );
}
