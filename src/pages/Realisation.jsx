import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Realisation.css";

const BASE = import.meta.env.BASE_URL;

const realisations = [
  {
    id: 1,
    client: "LES CABLERIES DU SENEGAL",
    logo: `${BASE}logo/L-C-S.png`,
    mission: "Traitement physique des archives, tri, classement, conditionnement, réorganisation des salles",
    type: "Archivage",
    year: "2026",
    date: "Mars 2026",
    description: "Projet complet de réorganisation des archives physiques avec optimisation des espaces de stockage.",
    details: {
      duration: "3 mois",
      scope: "Traitement complet, tri, classement, conditionnement, réorganisation",
      documents: "5000+",
      results: "Augmentation capacité stockage de 40%"
    }
  },
  {
    id: 2,
    client: "AIBD SA",
    logo: `${BASE}logo/A-I-B-D.png`,
    mission: "Archivage physique et numérisation des dossiers de marchés (2021-2024)",
    type: "Numérisation",
    year: "2026",
    date: "Mars 2026",
    description: "Numérisation et archivage des dossiers de marchés sur 4 années.",
    details: {
      duration: "2 mois",
      scope: "Numérisation haute résolution, indexation, base de données",
      documents: "15000+",
      results: "100% accessibilité numérique"
    }
  },
  {
    id: 3,
    client: "KPMG SENEGAL",
    logo: `${BASE}logo/KPMG.png`,
    mission: "Inventaire, tri, classement et réorganisation des archives",
    type: "Archivage",
    year: "2026",
    date: "Février 2026",
    description: "Gestion complète des archives avec création d'un nouvel inventaire.",
    details: {
      duration: "6 semaines",
      scope: "Audit, inventaire, tri, classement",
      documents: "8000+",
      results: "Système de classement optimisé"
    }
  },
  {
    id: 4,
    client: "CSE",
    logo: `${BASE}logo/C-S-E.png`,
    mission: "Installation de rayonnages (512 mètres linéaires)",
    type: "Infrastructure",
    year: "2026",
    date: "Février 2026",
    description: "Installation et mise en place d'une infrastructure de stockage moderne.",
    details: {
      duration: "4 semaines",
      scope: "Conception, installation, optimisation",
      storage: "512 mètres linéaires",
      results: "Capacité maximale utilisée"
    }
  },
  {
    id: 5,
    client: "ASSURANCES LA PROVIDENCE",
    logo: `${BASE}logo/la providence.png`,
    mission: "Rayonnages + scanner professionnel",
    type: "Infrastructure",
    year: "2025",
    date: "2025 - 2026",
    description: "Mise en place d'infrastructure de stockage et équipements numérisation.",
    details: {
      duration: "2 mois",
      scope: "Rayonnages industriels, scanner haut débit",
      documents: "20000+",
      results: "Capacité numérisation: 5000 pages/jour"
    }
  },
  {
    id: 6,
    client: "FONGIP",
    logo: `${BASE}logo/F-O-N-G-I-P.png`,
    mission: "Archivage + mise en place GED (Alfresco)",
    type: "GED",
    year: "2025",
    date: "Août 2025 - en cours",
    description: "Gestion électronique des documents avec plateforme Alfresco.",
    details: {
      duration: "En cours",
      scope: "GED Alfresco, intégration, formation",
      users: "150+",
      results: "Productivité accrue de 45%"
    }
  },
  {
    id: 7,
    client: "CNID",
    logo: `${BASE}logo/I-D-E-P.png`,
    mission: "Formation archivage numérique + GED",
    type: "Formation",
    year: "2023",
    date: "2023 - 2024",
    description: "Formation des agents aux meilleures pratiques archivage numérique.",
    details: {
      duration: "12 mois",
      scope: "Formation complète, certification",
      participants: "200+",
      results: "Certification professionnelle"
    }
  },
  {
    id: 8,
    client: "UAM",
    logo: `${BASE}logo/U-A-M.png`,
    mission: "Transfert bibliothèque (1240 ouvrages)",
    type: "Transfert",
    year: "2024",
    date: "Juin 2024",
    description: "Transfert, catalogage et mise en place de nouvelle bibliothèque.",
    details: {
      duration: "3 mois",
      scope: "Catalogage, transfer, organisation",
      books: "1240",
      results: "Bibliothèque digitalisée"
    }
  },
  {
    id: 9,
    client: "TOUBA OIL",
    logo: `${BASE}logo/touba-oil.png`,
    mission: "Rayonnages + mise en place GED",
    type: "Infrastructure",
    year: "2024",
    date: "Mai - Juin 2024",
    description: "Infrastructure stockage et système de gestion documentaire.",
    details: {
      duration: "2 mois",
      scope: "Rayonnages, GED, intégration",
      storage: "200 mètres linéaires",
      results: "Accès documentaire en temps réel"
    }
  },
  {
    id: 10,
    client: "HOGIP",
    logo: `${BASE}logo/HOGIP.jpg`,
    mission: "Formation de +100 agents sur archivage numérique",
    type: "Formation",
    year: "2024",
    date: "Mars 2024",
    description: "Formation intensive pour plus de 100 agents.",
    details: {
      duration: "6 semaines",
      scope: "Formation intensive, ateliers pratiques",
      participants: "100+",
      results: "Expertise interne acquise"
    }
  },
  {
    id: 11,
    client: "SEDIMA S.A",
    logo: `${BASE}logo/sedima.png`,
    mission: "1408 mètres linéaires + GED + matériel informatique",
    type: "Infrastructure",
    year: "2022",
    date: "2022 - 2023",
    description: "Projet majeur de modernisation avec infrastructure complète.",
    details: {
      duration: "12 mois",
      scope: "Infrastructure complète, GED, matériel IT",
      storage: "1408 mètres linéaires",
      results: "Centre d'archives moderne"
    }
  },
  {
    id: 12,
    client: "GROUPE KIRENE",
    logo: `${BASE}logo/groupe-kirene.png`,
    mission: "Installation rayonnages industriels",
    type: "Infrastructure",
    year: "2023",
    date: "Avril 2023",
    description: "Installation de rayonnages industriels haute capacité.",
    details: {
      duration: "6 semaines",
      scope: "Rayonnages industriels, optimisation",
      storage: "350 mètres linéaires",
      results: "Capacité optimale utilisée"
    }
  },
  {
    id: 13,
    client: "TOTAL ENERGIES",
    logo: `${BASE}logo/total-energie.png`,
    mission: "704 mètres linéaires de stockage",
    type: "Infrastructure",
    year: "2023",
    date: "Juin 2023",
    description: "Mise en place d'infrastructure de stockage haute densité.",
    details: {
      duration: "8 semaines",
      scope: "Rayonnages haute densité, sécurisation",
      storage: "704 mètres linéaires",
      results: "Sécurité documentaire maximale"
    }
  },
  {
    id: 14,
    client: "IDEP",
    logo: `${BASE}logo/I-D-E-P.png`,
    mission: "Numérisation (534000 pages) + catalogage",
    type: "Numérisation",
    year: "2018",
    date: "2018 - 2023",
    description: "Projet massif de numérisation avec catalogage complet.",
    details: {
      duration: "5 ans",
      scope: "Numérisation massive, indexation OCR, catalogage",
      documents: "534000 pages",
      results: "Archives entièrement digitalisées"
    }
  },
  {
    id: 15,
    client: "SENEGAL NUMERIQUE",
    logo: `${BASE}logo/senegal.jpg`,
    mission: "Archivage + numérisation projets",
    type: "Numérisation",
    year: "2017",
    date: "2017 - 2018",
    description: "Archivage et numérisation de projets gouvernementaux.",
    details: {
      duration: "12 mois",
      scope: "Archivage physique et numérique",
      documents: "100000+",
      results: "Projet gouvernemental référence"
    }
  },
];

const Stats = () => {
  const [counts, setCounts] = useState({
    documents: 0,
    projects: 0,
    storage: 0,
    years: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCounts((prev) => ({
        documents: prev.documents < 500000 ? prev.documents + 15000 : 500000,
        projects: prev.projects < 15 ? prev.projects + 0.5 : 15,
        storage: prev.storage < 3500 ? prev.storage + 100 : 3500,
        years: prev.years < 9 ? prev.years + 0.3 : 9,
      }));
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="stats-container" data-aos="fade-up">
      <div className="stat" data-aos="zoom-in" data-aos-delay="0">
        <h3>{Math.round(counts.documents).toLocaleString()}+</h3>
        <p>Documents numérisés</p>
      </div>
      <div className="stat" data-aos="zoom-in" data-aos-delay="100">
        <h3>{Math.round(counts.projects)}</h3>
        <p>Projets réalisés</p>
      </div>
      <div className="stat" data-aos="zoom-in" data-aos-delay="200">
        <h3>{Math.round(counts.storage)}+m</h3>
        <p>Mètres linéaires</p>
      </div>
      <div className="stat" data-aos="zoom-in" data-aos-delay="300">
        <h3>{Math.round(counts.years)}</h3>
        <p>Années d'expérience</p>
      </div>
    </div>
  );
};

const Realisation = () => {
  const [filteredData, setFilteredData] = useState(realisations);
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const years = [...new Set(realisations.map((item) => item.year))].sort((a, b) => b - a);
  const types = [...new Set(realisations.map((item) => item.type))].sort();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    let filtered = realisations;

    if (selectedYear !== "all") {
      filtered = filtered.filter((item) => item.year === selectedYear);
    }

    if (selectedType !== "all") {
      filtered = filtered.filter((item) => item.type === selectedType);
    }

    setFilteredData(filtered);
    AOS.refresh();
  }, [selectedYear, selectedType]);

  return (
    <>
      {/* HEADER AVEC LOGO */}
      <section className="realisation-header" data-aos="fade-down">
        <div className="header-content">
          <img src={`${BASE}image/logo-archive.png`} alt="ArchivPro Dakar" className="header-logo" />
          <h1 className="header-title">Nos Réalisations</h1>
          <p className="header-subtitle">Nos succès passés sont la garantie de votre succès futur</p>
        </div>
      </section>

      <section className="realisation">
        <div className="container">
          <p className="subtitle" data-aos="fade-up">
            Nous accompagnons des institutions publiques et privées dans la gestion, 
            la sécurisation et la valorisation de leurs archives.
          </p>

        {/* Compteurs */}
        <Stats />

        {/* Filtres */}
        <div className="filters" data-aos="fade-up" data-aos-delay="200">
          <div className="filter-group">
            <label>Année:</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="filter-select"
            >
              <option value="all">Toutes les années</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Type de mission:</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="filter-select"
            >
              <option value="all">Tous les types</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => {
              setSelectedYear("all");
              setSelectedType("all");
            }}
            className="reset-btn"
          >
            Réinitialiser
          </button>
        </div>

        {/* Grid */}
        <div className="grid">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div 
                className="card" 
                key={item.id} 
                data-aos="fade-up"
                data-aos-delay={`${(item.id % 3) * 100}`}
              >
                <div className="card-header">
                  <span className="logo">
                    <img src={item.logo} alt={item.client} />
                  </span>
                  <span className="mission-type">{item.type}</span>
                </div>
                <h3>{item.client}</h3>
                <p className="mission">{item.mission}</p>
                <p className="description">{item.description}</p>
                <span className="date">{item.date}</span>
                <Link to={`/realisation/${item.id}`} className="detail-link">
                  Voir les détails →
                </Link>
              </div>
            ))
          ) : (
            <div className="no-results" data-aos="fade-in">
              <p>Aucun projet ne correspond à vos critères de filtrage.</p>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default Realisation;