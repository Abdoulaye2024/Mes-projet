import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />

        {/* Dropdown */}
        <Route path="/archivage" element={<Archivage />} />
        <Route path="/numerisation" element={<Numerisation />} />
        <Route path="/ged" element={<GED />} />
        <Route path="/destruction" element={<Destruction />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/externalisation" element={<Externalisation />} />

        <Route path="/pourquoi" element={<Pourquoi />} />
        <Route path="/secteurs" element={<Secteurs />} />
        <Route path="/processus" element={<Processus />} />
        <Route path="/realisation" element={<Realisation />} />
        <Route path="/realisation/:id" element={<RealisationDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;