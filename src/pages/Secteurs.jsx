import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Secteurs.css';

const BASE = import.meta.env.BASE_URL;

const Secteurs = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const secteurs = [
    {
      id: 1,
      name: "Cabinets juridiques",
      icon: "fas fa-balance-scale",
      color: "#c9873a",
      description: "Solutions d'archivage pour la gestion des dossiers clients et contrats",
      fullDescription: "Les cabinets juridiques manipulent quotidiennement des documents confidentiels et à forte valeur légale. ArchivPro offre une solution sécurisée pour organiser, conserver et retrouver rapidement vos dossiers clients.",
      services: ["Archivage physique", "Numérisation", "GED", "Destruction sécurisée"],
      useCases: [
        "Conservation des contrats et actes légaux",
        "Archivage des dossiers clients (7-10 ans)",
        "Numérisation pour accès rapide aux pièces",
        "Gestion des délais de communication"
      ],
      stats: "500+ cabinets confiants"
    },
    {
      id: 2,
      name: "Santé & hôpitaux",
      icon: "fas fa-hospital",
      color: "#e09848",
      description: "Conformité RGPD et conservation de dossiers médicaux sécurisés",
      fullDescription: "Les établissements de santé doivent respecter des délais de conservation précis (ex: 20 ans pour les dossiers médicaux). ArchivPro garantit la confidentialité et la traçabilité de ces données sensibles.",
      services: ["Archivage physique", "Numérisation RGPD", "GED médicale", "Destruction certifiée"],
      useCases: [
        "Archivage des dossiers médicaux avec délais légaux",
        "Numérisation des résultats d'analyses",
        "Conformité RGPD pour les données sensibles",
        "Destruction sécurisée des documents obsolètes"
      ],
      stats: "12+ hôpitaux partenaires"
    },
    {
      id: 3,
      name: "Banque & Finance",
      icon: "fas fa-university",
      color: "#1a2438",
      description: "Conformité réglementaire et archivage de documents sensibles",
      fullDescription: "Les institutions financières sont soumises à des réglementations strictes concernant la conservation des documents. ArchivPro sécurise vos archives comptables, contrats et relevés.",
      services: ["Archivage sécurisé", "Numérisation audit", "GED financière", "Destruction légale"],
      useCases: [
        "Conservation des documents comptables (10 ans)",
        "Archivage des relevés et transactions",
        "Accessibilité pour audits réglementaires",
        "Destruction certifiée des documents obsolètes"
      ],
      stats: "25+ institutions partenaires"
    },
    {
      id: 4,
      name: "Administrations publiques",
      icon: "fas fa-landmark",
      color: "#f5e0c0",
      description: "Archivage conforme aux normes gouvernementales",
      fullDescription: "Les administrations publiques gère des archives permanentes d'intérêt public. ArchivPro accompagne vos services dans le respect des normes nationales et internationales.",
      services: ["Archivage physique", "Numérisation massive", "GED administrative", "Formation archivage"],
      useCases: [
        "Numerisation de dossiers administratifs",
        "Gestion des archives permanentes",
        "Conformité archivistique ISO",
        "Mise à disposition des documents publics"
      ],
      stats: "Projets gouvernementaux réalisés"
    },
    {
      id: 5,
      name: "BTP & Immobilier",
      icon: "fas fa-hard-hat",
      color: "#c9873a",
      description: "Archivage de plans, permis et dossiers techniques",
      fullDescription: "Les entreprises de construction produisent des volumes importants de plans, devis et documents techniques. ArchivPro offre une gestion centralisée et une numérisation de haute qualité.",
      services: ["Numérisation plans", "Archivage physique", "GED technique", "Gestion durée conservation"],
      useCases: [
        "Archivage des plans et devis",
        "Numérisation de dossiers de chantier",
        "Gestion des documents techniques",
        "Conservation garantie de couverture 10 ans"
      ],
      stats: "50+ entreprises BTP"
    },
    {
      id: 6,
      name: "Télécommunications",
      icon: "fas fa-broadcast-tower",
      color: "#e09848",
      description: "Archivage de contrats clients et documents techniques",
      fullDescription: "Le secteur des télécoms gère des milliers de contrats clients et documents techniques. ArchivPro centralise et sécurise vos archives pour un accès rapide et une conformité légale.",
      services: ["Numérisation massive", "GED clients", "Archivage physique", "Audit de conformité"],
      useCases: [
        "Archivage des contrats clients",
        "Numérisation des documents techniques",
        "Traçabilité des appels et services",
        "Conformité RGPD et données personnelles"
      ],
      stats: "Opérateurs majeurs confiants"
    },
    {
      id: 7,
      name: "Éducation",
      icon: "fas fa-graduation-cap",
      color: "#1a2438",
      description: "Gestion des dossiers étudiants et archives académiques",
      fullDescription: "Les établissements d'enseignement conservent des dossiers étudiants pour une durée légale minimale. ArchivPro facilite la gestion administrative et la conformité réglementaire.",
      services: ["Archivage dossiers", "Numérisation diplômes", "GED administrative", "Accès sécurisé"],
      useCases: [
        "Archivage des dossiers étudiants",
        "Numérisation des diplômes et relevés",
        "Accès rapide pour les demandes d'ex-étudiants",
        "Conformité RGPD pour données étudiantes"
      ],
      stats: "30+ écoles et universités"
    },
    {
      id: 8,
      name: "RH & Comptabilité",
      icon: "fas fa-briefcase",
      color: "#f5e0c0",
      description: "Conservation de dossiers de paie et contrats de travail",
      fullDescription: "La gestion RH et comptable produisent des documents légaux importants (fiches de paie, contrats, factures). ArchivPro garantit leur conservation sécurisée et leur accessibilité.",
      services: ["Archivage RH", "Numérisation paie", "GED comptable", "Destruction sécurisée"],
      useCases: [
        "Archivage des fiches de paie (5 ans min.)",
        "Numérisation des contrats de travail",
        "Gestion des factures et justificatifs",
        "Accessibilité pour audits et contrôles"
      ],
      stats: "200+ entreprises utilisent"
    },
    {
      id: 9,
      name: "Commerce & Import-Export",
      icon: "fas fa-ship",
      color: "#c9873a",
      description: "Archivage de documents douaniers et commerciaux",
      fullDescription: "Les entreprises commerciales et d'import-export gère des milliers de factures et documents douaniers. ArchivPro offre une traçabilité complète et une récupération rapide.",
      services: ["Numérisation factures", "Archivage physique", "GED commerciale", "Gestion douanière"],
      useCases: [
        "Archivage des factures et devis",
        "Numérisation des documents douaniers",
        "Traçabilité des commandes",
        "Conservation légale des registres commerciaux"
      ],
      stats: "Importateurs et exportateurs"
    },
    {
      id: 10,
      name: "Industrie",
      icon: "fas fa-industry",
      color: "#e09848",
      description: "Gestion de plans, spécifications et historiques de production",
      fullDescription: "Les entreprises industrielles doivent conserver des plans techniques, spécifications et historiques de production. ArchivPro garantit la traçabilité et l'accessibilité de ces documents critiques.",
      services: ["Numérisation plans", "GED technique", "Archivage physique", "Gestion versions"],
      useCases: [
        "Archivage de plans et spécifications",
        "Numérisation d'historiques de production",
        "Traçabilité qualité et normes",
        "Gestion de versions et évolutions techniques"
      ],
      stats: "Usines de production partenaires"
    }
  ];

  return (
    <>
      {/* HEADER SECTEURS */}
      <section className="secteurs-header" data-aos="fade-down">
        <div className="header-content">
          <img src={`${BASE}image/logo-archive.png`} alt="ArchivPro Dakar" className="header-logo" />
          <h1 className="header-title">Secteurs d'Activité</h1>
          <p className="header-subtitle">ArchivPro intervient dans tous les secteurs économiques du Sénégal</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="secteurs-intro">
        <div className="container">
          <div className="intro-content" data-aos="fade-up">
            <h2>Une expertise adaptée à chaque métier</h2>
            <p>
              Que vous soyez dans le secteur public ou privé, dans le juridique, la santé, la finance ou l'industrie, 
              ArchivPro a développé une expertise spécifique pour répondre aux défis documentaires de votre métier.
            </p>
            <p>
              Chacun de nos 10 secteurs d'intervention bénéficie d'une compréhension profonde des enjeux, des délais 
              de conservation légaux et des meilleures pratiques de gestion documentaire.
            </p>
          </div>
        </div>
      </section>

      {/* SECTEURS GRID */}
      <section className="secteurs-content">
        <div className="container">
          {secteurs.map((secteur, index) => (
            <div key={secteur.id} className="secteur-card" data-aos="fade-up" data-aos-delay={`${index * 50}`}>
              {/* Icon & Title */}
              <div className="secteur-header">
                <div className="secteur-icon" style={{ '--icon-color': secteur.color }}>
                  <i className={secteur.icon}></i>
                </div>
                <h3>{secteur.name}</h3>
              </div>

              {/* Description */}
              <p className="secteur-description">{secteur.fullDescription}</p>

              {/* Services */}
              <div className="secteur-services">
                <h4>Services applicables</h4>
                <ul>
                  {secteur.services.map((service, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="secteur-usecases">
                <h4>Cas d'usage courants</h4>
                <ul>
                  {secteur.useCases.map((useCase, idx) => (
                    <li key={idx}>
                      <i className="fas fa-arrow-right"></i>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="secteur-stats">
                <i className="fas fa-users"></i>
                <span>{secteur.stats}</span>
              </div>

              {/* CTA */}
              <a href="/contact" className="secteur-cta">
                Devis gratuit <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="secteurs-benefits">
        <div className="container">
          <h2 data-aos="fade-down">Pourquoi ArchivPro pour votre secteur?</h2>
          <div className="benefits-grid">
            <div className="benefit-card" data-aos="fade-up">
              <div className="benefit-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h4>Sécurité optimale</h4>
              <p>Entrepôt climatisé, accès contrôlé, confidentialité garantie</p>
            </div>
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
              <div className="benefit-icon">
                <i className="fas fa-gavel"></i>
              </div>
              <h4>Conformité légale</h4>
              <p>Respect de tous les délais de conservation par secteur</p>
            </div>
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
              <div className="benefit-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              <h4>Accès rapide</h4>
              <p>Retrouvez vos documents en 24h maximum</p>
            </div>
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
              <div className="benefit-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <h4>Économies réelles</h4>
              <p>Réduisez les coûts internes d'archivage en externalisant</p>
            </div>
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="400">
              <div className="benefit-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h4>Support dédié</h4>
              <p>Équipe disponible 24h/24 pour questions urgentes</p>
            </div>
            <div className="benefit-card" data-aos="fade-up" data-aos-delay="500">
              <div className="benefit-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h4>Certifications ISO</h4>
              <p>ISO 9001, ISO 15489, RGPD et normes locales</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="secteurs-cta">
        <div className="cta-content">
          <h2>Votre secteur n'est pas listé?</h2>
          <p>Contactez-nous pour étudier une solution adaptée à votre domaine d'activité</p>
          <a href="/contact" className="btn-cta">Demander une consultation gratuite</a>
        </div>
      </section>
    </>
  );
};

export default Secteurs;