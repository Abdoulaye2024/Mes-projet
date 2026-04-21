import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./RealisationDetail.css";

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
    },
    fullDescription: "Les Câbleries du Sénégal, acteur majeur de l'industrie locale, confiait l'archivage de ses documents critiques. Nous avons réalisé un audit complet des 5000 documents, suivi d'un tri rigoureux, d'un classement selon les normes ISO et d'une réorganisation complète des salles de stockage.",
    services: ["Audit documentaire", "Tri et classement", "Conditionnement", "Réorganisation spatiale"],
    achievements: [
      "Optimisation de l'espace disponible",
      "Conformité aux normes ISO 15489",
      "Réduction du temps d'accès aux documents de 70%",
      "Mise en place d'un système de gestion"
    ],
    contact: "Pour plus de détails sur ce projet"
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
    },
    fullDescription: "AIBD SA portail aérien sénégalais avait besoin de numériser l'ensemble de ses dossiers de marchés de 4 années pour assurer la pérennité et l'accessibilité des données critiques.",
    services: ["Numérisation haute résolution", "Compression OCR", "Indexation documentaire", "Mise en base de données"],
    achievements: [
      "15000 pages numérisées en 2 mois",
      "Taux de reconnaissance OCR de 98%",
      "Base de données full-text search",
      "Conformité légale et archivistique"
    ],
    contact: "Pour consulter les résultats"
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
    },
    fullDescription: "Le cabinet de conseil KPMG Sénégal disposait d'archives désorganisées s'étendant sur plusieurs décennies. Nous avons effectué un audit exhaustif, créé un inventaire complet et réorganisé selon les standards de classification.",
    services: ["Audit archivistique", "Création d'inventaire", "Tri et classement", "Réorganisation"],
    achievements: [
      "Inventaire complet de 8000 documents",
      "Plan de classement normalisé ISO",
      "Accès informatisé aux archives",
      "Documentation centralisée"
    ],
    contact: "Contactez-nous pour les tarifs"
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
    },
    fullDescription: "CSE avait besoin d'une solution de stockage sûre et optimisée. Nous avons conçu et installé 512 mètres linéaires de rayonnages standards, doublant la capacité de stockage.",
    services: ["Étude d'espace", "Fourniture de rayonnages", "Installation", "Formation du personnel"],
    achievements: [
      "512 mètres linéaires installés",
      "ROI en 18 mois",
      "Capacité doublée",
      "Conformité norme NF 5 étoiles"
    ],
    contact: "Demander un devis gratuit"
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
    },
    fullDescription: "Assurances La Providence cherchait à moderniser son infrastructure documentaire. Installation complète : rayonnages + scanner professionnel haute capacité.",
    services: ["Installation rayonnages", "Scanner professionnel", "Intégration GED", "Formation"],
    achievements: [
      "Infrastructure complète",
      "Capacité numérique : 5000 pages/jour",
      "Réduction coûts archivage de 35%",
      "Accessibilité 24/24"
    ],
    contact: "Visite d'installation gratuite"
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
    },
    fullDescription: "FONGIP, fonds d'appui aux initiatives de développement à base communautaire, a choisi Alfresco ECM pour centraliser et sécuriser sa gestion documentaire.",
    services: ["Audit fonctionnel", "Implémentation Alfresco", "Intégration systèmes", "Formation intensive"],
    achievements: [
      "GED complètement fonctionnelle",
      "150+ utilisateurs formés",
      "Productivité +45%",
      "Conformité RGPD assurée"
    ],
    contact: "Contacter notre équipe GED"
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
    },
    fullDescription: "Le CNID (Centre National d'Informatique Documentaire) a bénéficié d'un programme de formation complet en archivage numérique et systèmes GED, certifiant plus de 200 agents.",
    services: ["Programme de formation", "Ateliers pratiques", "Certification", "Accompagnement post-formation"],
    achievements: [
      "200+ agents certifiés",
      "7 modules de formation",
      "Taux de réussite : 92%",
      "Reconnaissance nationale"
    ],
    contact: "Inscriptions ouvertes"
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
    },
    fullDescription: "L'Université Assane Mbacké avait besoin de transférer et de cataloguer 1240 ouvrages de bibliothèque avec modernisation du système de gestion.",
    services: ["Catalogage Dewey", "Transfert logistique", "Système de gestion", "Digitalisation"],
    achievements: [
      "1240 ouvrages catalogués",
      "Système de gestion moderne",
      "Taux accessibilité : 99%",
      "Conformité normes AFNOR"
    ],
    contact: "Nos services bibliothèque"
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
    },
    fullDescription: "Touba Oil Sénégal a modernisé son infrastructure documentaire avec installation de rayonnages et système GED pour l'accès immédiat aux documents critiques.",
    services: ["Infrastructure stockage", "Système GED", "Formation utilisateurs", "Support technique"],
    achievements: [
      "Infrastructure complète",
      "Temps d'accès réduit de 80%",
      "Sécurité documentaire optimale",
      "ROI positif en 12 mois"
    ],
    contact: "Demander une démonstration"
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
    },
    fullDescription: "HOGIP (Hôpital Général et Institut Paramédical) a engage ses équipes dans une formation intensive d'archivage numérique pour moderniser ses procédures documentaires.",
    services: ["Programme adapté", "Ateliers pratiques", "Certification", "Support continu"],
    achievements: [
      "100+ agents formés",
      "Taux de satisfaction : 98%",
      "Mise en place GED réussie",
      "Conformité normes santé"
    ],
    contact: "Autre programme de formation"
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
    },
    fullDescription: "Projet phare : création d'un véritable centre d'archives moderne pour SEDIMA S.A. L'un de nos plus grands projets avec 1408 mètres de rayonnages et système GED complet.",
    services: ["Conception centre archives", "Rayonnages haute densité", "Système GED", "Infrastructure IT"],
    achievements: [
      "Centre d'archives ultramoderne",
      "1408 mètres linéaires",
      "Gestion archivage complète",
      "Investissement ROI : 24 mois"
    ],
    contact: "Case study complet disponible"
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
    },
    fullDescription: "Groupe Kirène a fait confiance à nos équipes pour installer une infrastructure de stockage haute capacité et haute sécurité (350 mètres linéaires).",
    services: ["Infrastructure industrielle", "Installation spécialisée", "Optimisation espace", "Maintenance"],
    achievements: [
      "350 mètres bien exploités",
      "Conformité norme ISO",
      "Sécurité maximale",
      "Support long terme"
    ],
    contact: "Contacts projets industriels"
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
    },
    fullDescription: "Total Énergies Sénégal a confié à archivpro l'installation d'une infrastructure majeure de 704 mètres linéaires de rayonnages sécurisés et climatisés.",
    services: ["Infrastructure sécurisée", "Climatisation", "Surveillance", "Accès contrôlé"],
    achievements: [
      "704 mètres linéaires",
      "Environnement optimal (18-21°C, 45-55% HR)",
      "Surveillance 24/7",
      "Accès biométrique"
    ],
    contact: "Projets grand volume"
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
    },
    fullDescription: "Projet monumental de 5 ans : numérisation de 534 000 pages de l'IDEP (Institut de Développement Économique et de Planification) avec catalogage exhaustif et OCR.",
    services: ["Numérisation en masse", "OCR multilingue", "Catalogage ISO", "Archivage numérique"],
    achievements: [
      "534 000 pages numérisées",
      "OCR français/arabe",
      "Accessibilité complète",
      "Référence nationale"
    ],
    contact: "Nos références majeures"
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
    },
    fullDescription: "Projet gouvernemental de dimension stratégique : archivage et numérisation de plus de 100 000 documents de projets nationaux dans le cadre du programme Sénégal Numérique.",
    services: ["Archivage gouvernemental", "Numérisation respectant normes d'État", "Sécurité maximale", "Conformité légale"],
    achievements: [
      "100 000+ pages numérisées",
      "Confidentialité d'État assurée",
      "Infrastructure sécurisée",
      "Archivage bénéficiaire"
    ],
    contact: "Références gouvernementales"
  },
];

const RealisationDetail = () => {
  const { id } = useParams();
  const realisation = realisations.find((item) => item.id === parseInt(id));

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
    window.scrollTo(0, 0);
  }, [id]);

  if (!realisation) {
    return (
      <section className="detail-section">
        <div className="container">
          <Link to="/realisation" className="back-link">
            ← Retour aux réalisations
          </Link>
          <div className="not-found">
            <h2>Projet non trouvé</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="detail-section">
      <div className="container">
        <Link to="/realisation" className="back-link">
          ← Retour aux réalisations
        </Link>

        <div className="detail-header" data-aos="fade-down">
          <div className="header-logo">
            <img src={realisation.logo} alt={realisation.client} />
          </div>
          <div className="header-info">
            <h1>{realisation.client}</h1>
            <div className="header-meta">
              <span className="badge badge-type">{realisation.type}</span>
              <span className="badge badge-year">{realisation.year}</span>
              <span className="badge badge-date">{realisation.date}</span>
            </div>
          </div>
        </div>

        <div className="detail-content">
          <div className="main-content" data-aos="fade-right">
            <div className="section">
              <h2>Mission</h2>
              <p className="mission-text">{realisation.mission}</p>
              <p className="description-text">{realisation.fullDescription}</p>
            </div>

            <div className="section">
              <h2>Services fournis</h2>
              <ul className="services-list">
                {realisation.services.map((service, index) => (
                  <li key={index} data-aos="fade-left" data-aos-delay={`${index * 50}`}>
                    ✓ {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="section">
              <h2>Résultats et réalisations</h2>
              <div className="achievements-grid">
                {realisation.achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className="achievement-item"
                    data-aos="zoom-in"
                    data-aos-delay={`${index * 100}`}
                  >
                    <span className="achievement-icon">🎯</span>
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="sidebar" data-aos="fade-left">
            <div className="sidebar-card">
              <h3>Détails du projet</h3>
              <div className="detail-item">
                <label>Durée</label>
                <p>{realisation.details.duration}</p>
              </div>
              <div className="detail-item">
                <label>Portée</label>
                <p>{realisation.details.scope}</p>
              </div>
              {realisation.details.documents && (
                <div className="detail-item">
                  <label>Documents</label>
                  <p>{realisation.details.documents}</p>
                </div>
              )}
              {realisation.details.storage && (
                <div className="detail-item">
                  <label>Stockage</label>
                  <p>{realisation.details.storage}</p>
                </div>
              )}
              {realisation.details.users && (
                <div className="detail-item">
                  <label>Utilisateurs</label>
                  <p>{realisation.details.users}</p>
                </div>
              )}
              {realisation.details.results && (
                <div className="detail-item highlight">
                  <label>Résultat principal</label>
                  <p>{realisation.details.results}</p>
                </div>
              )}
            </div>

            <div className="sidebar-card cta">
              <h3>Intéressé par ce projet ?</h3>
              <p>{realisation.contact}</p>
              <Link to="/contact" className="cta-button">
                Nous contacter
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default RealisationDetail;
