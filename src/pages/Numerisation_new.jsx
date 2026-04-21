import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Numerisation.css';

const BASE = import.meta.env.BASE_URL;

const Numerisation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const processSteps = [
    {
      id: 1,
      name: "Réception & Préparation",
      icon: "📋",
      description: "Réception de vos documents, tri et vérification de l'intégrité"
    },
    {
      id: 2,
      name: "Numérisation",
      icon: "🔍",
      description: "Scan haute résolution 300 dpi, traitement des images"
    },
    {
      id: 3,
      name: "Correction d'Image",
      icon: "🖼️",
      description: "Améliorations d'image, correction de perspective et de contraste"
    },
    {
      id: 4,
      name: "OCR & Indexation",
      icon: "🔤",
      description: "Reconnaissance optique multilingue, indexation full-text"
    },
    {
      id: 5,
      name: "Stockage Sécurisé",
      icon: "💾",
      description: "Sauvegarde sur serveurs redondants, chiffrement AES 256"
    },
    {
      id: 6,
      name: "Livraison",
      icon: "✅",
      description: "Export en formats standards, portail accès sécurisé"
    }
  ];

  const documentTypes = [
    {
      id: 1,
      name: "Documents Administratifs",
      icon: "📄",
      specs: "Format: A3 à A5 | Couleur | Volume: Illimité"
    },
    {
      id: 2,
      name: "Photographies",
      icon: "📸",
      specs: "Format: Toutes tailles | Couleur haute fidélité | Archives historiques"
    },
    {
      id: 3,
      name: "Rapports & Livres",
      icon: "📚",
      specs: "Format: Reliés | Reliure en spirale | Gestion reliure"
    },
    {
      id: 4,
      name: "Documents Texte",
      icon: "📃",
      specs: "Toutes origines | Papiers divers | Qualité optimisée"
    }
  ];

  const technicalSpecs = [
    {
      id: 1,
      title: "Résolution",
      icon: "📊",
      value: "300 dpi standard",
      detail: "jusqu'à 600 dpi si nécessaire"
    },
    {
      id: 2,
      title: "Vitesse",
      icon: "⚡",
      value: "500+ pages/jour",
      detail: "Selon volume et complexité"
    },
    {
      id: 3,
      title: "Formats",
      icon: "🖼️",
      value: "PDF, TIFF, JPG, TXT",
      detail: "Formats standards garantis"
    },
    {
      id: 4,
      title: "Confidentialité",
      icon: "🔐",
      value: "Chiffrement AES-256",
      detail: "Contrats confidentialité signés"
    }
  ];

  const benefits = [
    {
      id: 1,
      number: "01",
      title: "Gain d'Espace",
      description: "Libérez des mètres carrés de locaux de stockage physique coûteux"
    },
    {
      id: 2,
      number: "02",
      title: "Économies Réalisées",
      description: "Réduction drastique des frais de gestion et d'entreposage"
    },
    {
      id: 3,
      number: "03",
      title: "Productivité +60%",
      description: "Retrouvez les documents en secondes au lieu d'heures. Traitement automatisé des workflows"
    },
    {
      id: 4,
      number: "04",
      title: "Sécurité Accrue",
      description: "Sauvegardes multiples, accès contrôlé, audit complet de tous les mouvements"
    },
    {
      id: 5,
      number: "05",
      title: "Conformité Légale",
      description: "Respecte les normes ISO 15489, RGPD et délais de conservation légaux"
    },
    {
      id: 6,
      number: "06",
      title: "Collaboration Simplifiée",
      description: "Partagez les documents sécurisés avec vos équipes internes et partenaires"
    }
  ];

  const capacites = [
    {
      id: 1,
      title: "Volume Illimité",
      icon: "📈",
      description: "De 100 à 1 million de pages, nous adaptons nos équipes"
    },
    {
      id: 2,
      title: "Délais Courts",
      icon: "⚡",
      description: "Projets de 500 000 pages en quelques semaines"
    },
    {
      id: 3,
      title: "Qualité Garantie",
      icon: "⭐",
      description: "Contrôle qualité 100% avec re-scans si besoin"
    },
    {
      id: 4,
      title: "Expertise Éprouvée",
      icon: "✅",
      description: "Nous avons numérisé 4+ millions de pages pour 50+ clients"
    }
  ];

  const casesStudy = [
    {
      id: 1,
      client: "IDEP",
      volume: "534 000 pages",
      project: "Numérisation massive archives IDEP",
      duration: "8 semaines",
      result: "Digitalisation 100%, recherche instantanée activée"
    },
    {
      id: 2,
      client: "FONGIP",
      volume: "250 000 pages",
      project: "Dossiers clients et contrats",
      duration: "6 semaines",
      result: "Gain espace 80%, délai traitement -70%"
    },
    {
      id: 3,
      client: "Assurances Providence",
      volume: "180 000 pages",
      project: "Sinistres et historiques clients",
      duration: "4 semaines",
      result: "Accès 24/7, productivité +60%"
    }
  ];

  const normes = [
    {
      id: 1,
      title: "ISO 15489",
      subtitle: "Gestion documentaire",
      icon: "🏆",
      description: "Normes internationales numérisation et archivage"
    },
    {
      id: 2,
      title: "ISO 9001",
      subtitle: "Qualité de service",
      icon: "✅",
      description: "Processus qualité certifiés et contrôlés"
    },
    {
      id: 3,
      title: "RGPD Compliant",
      subtitle: "Protection données",
      icon: "🔐",
      description: "Conformité totale données personnelles"
    },
    {
      id: 4,
      title: "Traçabilité Totale",
      subtitle: "Audit complet",
      icon: "📊",
      description: "Enregistrement de chaque action"
    }
  ];

  return (
    <div className="numerisation-page">
      {/* HEADER */}
      <section className="numerisation-header" data-aos="fade-down">
        <div className="header-content">
          <img src={`${BASE}image/logo-archive.png`} alt="Numérisation" className="header-logo" />
          <h1 className="header-title">Services de Numérisation Professionnelle</h1>
          <p className="header-subtitle">
            Transformez vos documents papier en fichiers numériques de haute qualité pour une gestion optimale
          </p>
        </div>
      </section>

      {/* PRESENTATION INTRO */}
      <section className="numerisation-intro" data-aos="fade-up">
        <div className="container">
          <div className="intro-content">
            <h2>Pourquoi numériser vos documents ?</h2>
            <p className="intro-text">
              La numérisation est bien plus qu'une simple conversion papier-image. C'est la base de votre transformation digitale :
            </p>
            <ul className="intro-benefits">
              <li><strong>Accessibilité</strong> instantanée 24/7 depuis n'importe où</li>
              <li><strong>Gain d'espace</strong> : éliminez les archivages physiques</li>
              <li><strong>Économies</strong> sur les frais de gestion et d'entreposage</li>
              <li><strong>Recherche rapide</strong> avec OCR et indexation full-text</li>
              <li><strong>Sécurité renforcée</strong> avec sauvegardes multiples</li>
            </ul>
          </div>
          <div className="intro-image" data-aos="zoom-in">
            <img src={`${BASE}image/Numérisation.jpg`} alt="Numérisation professionnelle" />
          </div>
        </div>
      </section>

      {/* PROCESSUS EN 6 ETAPES */}
      <section className="processus-numerisation" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Notre Processus en 6 Étapes</h2>
          <p className="section-subtitle">Une approche structurée pour garantir qualité et sécurité</p>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div 
                key={step.id} 
                className="process-step" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="step-number">{step.id}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.name}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES DE DOCUMENTS */}
      <section className="types-documents" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Types de Documents Acceptés</h2>
          <p className="section-subtitle">Tous vos besoins de numérisation couverts</p>

          <div className="types-grid">
            {documentTypes.map((type, index) => (
              <div 
                key={type.id} 
                className="type-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="type-icon">{type.icon}</div>
                <h3>{type.name}</h3>
                <p className="type-specs">{type.specs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARACTERISTIQUES TECHNIQUES */}
      <section className="caracteristiques-techniques" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Caractéristiques Techniques</h2>
          <p className="section-subtitle">Équipement professionnel pour résultats optimaux</p>

          <div className="specs-grid">
            {technicalSpecs.map((spec, index) => (
              <div 
                key={spec.id} 
                className="spec-card" 
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
              >
                <div className="spec-icon">{spec.icon}</div>
                <h3>{spec.title}</h3>
                <p className="spec-value">{spec.value}</p>
                <p className="spec-detail">{spec.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="numerisation-benefits" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Avantages Concrets</h2>
          <p className="section-subtitle">Résultats mesurables et durables</p>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.id} 
                className="benefit-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="benefit-number">{benefit.number}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPACITES */}
      <section className="capacites" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Nos Capacités</h2>
          <p className="section-subtitle">Équipement de pointe pour traiter vos projets de numérisation</p>

          <div className="capacites-content">
            {capacites.map((capacite, index) => (
              <div 
                key={capacite.id} 
                className="capacite-item" 
                data-aos="fade-right" 
                data-aos-delay={index * 100}
              >
                <div className="capacite-icon">{capacite.icon}</div>
                <div className="capacite-text">
                  <h3>{capacite.title}</h3>
                  <p>{capacite.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARAISON SOLUTIONS */}
      <section className="comparaison-solutions" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Comparaison: Interne vs Externe</h2>
          <p className="section-subtitle">Pourquoi externaliser votre numérisation ?</p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Critères</th>
                  <th>Numérisation Interne</th>
                  <th>ArchivPro (Externalisation)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Coût Initial</strong></td>
                  <td>Élevé (équipement)</td>
                  <td>Réduit</td>
                </tr>
                <tr>
                  <td><strong>Ressources Humaines</strong></td>
                  <td>3-5 personnes dédié</td>
                  <td>Zéro</td>
                </tr>
                <tr>
                  <td><strong>Délai 100k pages</strong></td>
                  <td>3-4 mois</td>
                  <td>2-3 semaines</td>
                </tr>
                <tr>
                  <td><strong>Qualité</strong></td>
                  <td>Variable</td>
                  <td>Garantie ISO</td>
                </tr>
                <tr>
                  <td><strong>Espace Bureau</strong></td>
                  <td>10-15 m²</td>
                  <td>Épargné</td>
                </tr>
                <tr>
                  <td><strong>Sécurité Données</strong></td>
                  <td>À gérer</td>
                  <td>Incluse</td>
                </tr>
                <tr>
                  <td><strong>Expertise OCR</strong></td>
                  <td>Limitée</td>
                  <td>Multilingue +15 langues</td>
                </tr>
                <tr>
                  <td><strong>ROI</strong></td>
                  <td>24+ mois</td>
                  <td>6-8 mois</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CAS DE SUCCES */}
      <section className="case-studies" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Nos Réalisations</h2>
          <p className="section-subtitle">Projets majeurs de numérisation réussis</p>

          <div className="cases-grid">
            {casesStudy.map((caseItem, index) => (
              <div 
                key={caseItem.id} 
                className="case-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="case-header">
                  <h3>{caseItem.client}</h3>
                  <span className="case-badge">{caseItem.volume}</span>
                </div>
                <p className="case-detail"><strong>Projet:</strong> {caseItem.project}</p>
                <p className="case-detail"><strong>Durée:</strong> {caseItem.duration}</p>
                <p className="case-result"><strong>Résultat:</strong> {caseItem.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NORMES */}
      <section className="normes-numerisation" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Normes et Certifications</h2>
          <p className="section-subtitle">Vos données entre les mains des experts certifiés</p>

          <div className="normes-grid">
            {normes.map((norme, index) => (
              <div 
                key={norme.id} 
                className="norme-card" 
                data-aos="zoom-in" 
                data-aos-delay={index * 100}
              >
                <div className="norme-icon">{norme.icon}</div>
                <h3>{norme.title}</h3>
                <p>{norme.subtitle}</p>
                <p className="norme-desc">{norme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-numerisation" data-aos="fade-up">
        <div className="container">
          <div className="cta-content">
            <h2>Prêt à Numériser Vos Documents ?</h2>
            <p>Obtenir un devis gratuit pour votre projet de numérisation</p>
            <button className="cta-button">Contactez-nous Aujourd'hui</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Numerisation;
