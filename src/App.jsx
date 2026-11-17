// ─────────────────────────────────────────────────────────────
// BASE URL des images
// ─────────────────────────────────────────────────────────────
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Archivage from "./pages/Archivage";
import Numerisation from "./pages/Numerisation";
import GED from "./pages/GED";
import Destruction from "./pages/Destruction";
import Audit from "./pages/Audit";
import Externalisation from "./pages/Externalisation";
import Pourquoi from "./pages/Pourquoi";
import Secteurs from "./pages/Secteurs";
import Processus from "./pages/Processus";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Realisation from "./pages/Realisation";
import RealisationDetail from "./pages/RealisationDetail";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ─────────────────────────────────────────────────────────────
// ✅ COMPOSANT DE SCROLL AUTOMATIQUE VERS LES ANCRES
// Détecte /#secteurs, /#processus, /#faq, /#contact, etc.
// ─────────────────────────────────────────────────────────────
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // Délai pour laisser la page Home se charger complètement
      const timeout = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const navbarHeight = 110; // hauteur de la navbar sticky
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth",
          });
        }
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      // Pas de hash → scroll en haut
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />   {/* ✅ AJOUT IMPORTANT */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />

        {/* Dropdown Services */}
        <Route path="/archivage" element={<Archivage />} />
        <Route path="/numerisation" element={<Numerisation />} />
        <Route path="/ged" element={<GED />} />
        <Route path="/destruction" element={<Destruction />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/externalisation" element={<Externalisation />} />

        {/* Autres pages */}
        <Route path="/pourquoi" element={<Pourquoi />} />
        <Route path="/realisation" element={<Realisation />} />
        <Route path="/realisation/:id" element={<RealisationDetail />} />
        <Route path="/contact" element={<Contact />} />

        {/* Pages conservées mais non utilisées dans la navbar (optionnel) */}
        <Route path="/secteurs" element={<Secteurs />} />
        <Route path="/processus" element={<Processus />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;