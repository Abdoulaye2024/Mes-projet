import Home from './component/Home/home';
import Services from './component/Services/services';
import Apropos from './component/Apropos/Apropos';
import Navbar from './component/Navbar/Navbar';
import Actualite from './component/Actualite/Actualite';
import Details from './component/Products/Details';
import Paniers from './component/Products/Paniers';
import Information from './component/Products/Information';

// Import des nouvelles pages
import MoteursPage from './component/Products/MoteursPage';
import TransformateursPage from './component/Products/TransformateursPage';
import VariateursPage from './component/Products/VariateursPage';
import AutomatesPage from './component/Products/AutomatesPage';
import ComposantsPage from './component/Products/ComposantsPage';
import EquipementsPage from './component/Products/EquipementsPage';

import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (  
    <div className='App'>
      {/* Première navbar */}
      <Navbar />
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/actualite" element={<Actualite />} />
        <Route path="/services" element={<Services />} />
        <Route path="/details" element={<Details />} />
        <Route path="/panier" element={<Paniers />} />
        <Route path="/info" element={<Information />} />

        {/* Nouvelles routes produits */}
        <Route path="/moteurs" element={<MoteursPage />} />
        <Route path="/transformateurs" element={<TransformateursPage />} />
        <Route path="/variateurs" element={<VariateursPage />} />
        <Route path="/automates" element={<AutomatesPage />} />
        <Route path="/composants" element={<ComposantsPage />} />
        <Route path="/equipements" element={<EquipementsPage />} />
      </Routes>
    </div>
  );
}

export default App;