import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Archivage.css';

const Archivage = () => {
  const [activeTab, setActiveTab] = useState('presentation');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const archivageMethods = [
    {
      id: 1,
      title: "Archivage Physique Sécurisé",
      icon: "fas fa-box",
      description: "Conservation de documents papier en locaux climatisés et sécurisés",
      benefits: [
        "Environnement contrôlé (température, humidité)",
        "Accès restreint et sécurisé",
        "Traçabilité complète des mouvements",
        "Conforme aux normes ISO 15489"
      ],
      process: [
        "Réception et inventaire des documents",
        "Tri et classification",
        "Mise en boîtes archivage",
        "Stockage en local sécurisé",
        "Indexation informatisée"
      ]
    },
    {
      id: 2,
      title: "Archivage Électronique",
      icon: "fas fa-save",
      description: "Conversion de documents papier en format numérique sécurisé",
      benefits: [
        "Accès rapide et facile 24/7",
        "Réduction de l'espace de stockage",
        "Sauvegardes automatiques",
        "Recherche full-text instantanée",
        "Conformité légale et traçabilité"
      ],
      process: [
        "Numérisation haute résolution (300 dpi)",
        "Correction et amélioration d'image",
        "Reconnaissance optique de caractères (OCR)",
        "Indexation automatique",
        "Stockage sécurisé sur serveurs redondants"
      ]
    },
    {
      id: 3,
      title: "Gestion avec GED (Alfresco)",
      icon: "fas fa-folder-open",
      description: "Système de Gestion Électronique de Documents moderne et collaboratif",
      benefits: [
        "Plateforme collaborative et intuitive",
        "Workflows et processus automatisés",
        "Contrôle d'accès granulaire",
        "Audit et conformité RGPD",
        "Intégration avec vos systèmes existants"
      ],
      process: [
        "Implémentation de la plateforme Alfresco",
        "Configuration des workflows",
        "Migration des documents",
        "Formation des utilisateurs",
        "Support et maintenance continue"
      ]
    }
  ];

  const features = [
    {
      icon: "fas fa-lock",
      title: "Sécurité Maximale",
      description: "Locaux sécurisés, chiffrement des données, accès contrôlé"
    },
    {
      icon: "fas fa-chart-bar",
      title: "Traçabilité Complète",
      description: "Suivi de chaque document, historique d'accès, rapports détaillés"
    },
    {
      icon: "fas fa-bolt",
      title: "Accès Rapide",
      description: "Retrouvez vos documents en secondes, pas en heures"
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Économies Réalisées",
      description: "Réduction des frais immobiliers et de gestion"
    },
    {
      icon: "fas fa-check",
      title: "Conformité Légale",
      description: "Normes ISO 15489, délais de conservation respectés"
    },
    {
      icon: "fas fa-globe",
      title: "Accessibilité Globale",
      description: "Accès depuis n'importe où, collaboratif et synchronisé"
    }
  ];

  const casesStudy = [
    {
      client: "IDEP (Institut de Développement Économique)",
      project: "Numérisation massive 534 000 pages",
      results: "Digitalisation complète, recherche instantanée, gain de productivité 60%",
      image: "/image/archive_img.png"
    },
    {
      client: "FONGIP (Fonds de Garantie)",
      project: "Archivage des dossiers clients 10 ans",
      results: "Conformité légale, traçabilité totale, gain d'espace 80%",
      image: "/image/archive_img2.png"
    },
    {
      client: "Assurances Providence",
      project: "GED avec workflows automatisés",
      results: "Processus de traitement accélérés, satisfaction clients améliorée",
      image: "/image/Audit_Conseil.jpg"
    }
  ];

  const conservationPeriods = [
    { type: "Documents courants", period: "0-3 ans", location: "Bureau/Local actif" },
    { type: "Documents intermédiaires", period: "3-10 ans", location: "Archivage physique ou numérique" },
    { type: "Documents définitifs", period: "+10 ans", location: "Archivage GED sécurisé" },
    { type: "Documents sensibles", period: "Durée légale", location: "Coffre-fort numérique" }
  ];

  return (
    <div className="archivage-page">
      {/* HEADER */}
      <section className="archivage-header" data-aos="fade-down">
        <div className="header-content">
          <img src={`${BASE}image/logo-archive.png`} alt="Archivage" className="header-logo" />
          <h1 className="header-title">Solutions d'Archivage Professionnel</h1>
          <p className="header-subtitle">
            Sécurisez votre patrimoine documentaire avec nos solutions d'archivage adaptées à vos besoins
          </p>
        </div>
      </section>

      {/* PRESENTATION INTRO */}
      <section className="archivage-intro" data-aos="fade-up">
        <div className="container">
          <div className="intro-content">
            <h2>Pourquoi bien archiver vos documents ?</h2>
            <p className="intro-text">
              L'archivage professionnel n'est pas une simple conservation. C'est une stratégie complète pour :
            </p>
            <ul className="intro-benefits">
              <li><strong>Protéger</strong> votre patrimoine informationnel</li>
              <li><strong>Optimiser</strong> votre espace de travail</li>
              <li><strong>Assurer</strong> la conformité légale</li>
              <li><strong>Faciliter</strong> l'accès aux informations</li>
              <li><strong>Économiser</strong> sur vos frais de gestion</li>
            </ul>
          </div>
          <div className="intro-image" data-aos="zoom-in">
            <img src={`${BASE}image/Archivage physique.png`} alt="Archivage professionnel" />
          </div>
        </div>
      </section>

      {/* METHODES D'ARCHIVAGE */}
      <section className="archivage-methods" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Nos Trois Méthodes d'Archivage</h2>
          <p className="section-subtitle">Choisissez la solution qui convient à vos besoins</p>

          <div className="methods-grid">
            {archivageMethods.map((method, index) => (
              <div 
                key={method.id} 
                className="method-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="method-icon"><i className={method.icon}></i></div>
                <h3>{method.title}</h3>
                <p className="method-description">{method.description}</p>

                <div className="method-details">
                  <div className="details-section">
                    <h4><i className="fas fa-check"></i> Avantages</h4>
                    <ul>
                      {method.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="details-section">
                    <h4><i className="fas fa-clipboard-list"></i> Processus</h4>
                    <ol>
                      {method.process.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="archivage-features" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Nos Forces</h2>
          <p className="section-subtitle">Ce qui fait la différence chez ArchivPro</p>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card" 
                data-aos="flip-left" 
                data-aos-delay={index * 50}
              >
                <div className="feature-icon"><i className={feature.icon}></i></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSERVATION TIMELINE */}
      <section className="conservation-timeline" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Cycles de Conservation des Documents</h2>
          <p className="section-subtitle">Optimisez la rétention de vos documents selon leur cycle de vie</p>

          <div className="timeline-table">
            <div className="timeline-header">
              <div className="col col-type">Type de Document</div>
              <div className="col col-period">Période</div>
              <div className="col col-location">Localisation</div>
            </div>

            {conservationPeriods.map((item, index) => (
              <div 
                key={index} 
                className="timeline-row" 
                data-aos="fade-right" 
                data-aos-delay={index * 50}
              >
                <div className="col col-type">{item.type}</div>
                <div className="col col-period">{item.period}</div>
                <div className="col col-location">{item.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED COMPARISON */}
      <section className="detailed-comparison" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Comparaison Détaillée</h2>
          <p className="section-subtitle">Trouvez la meilleure solution pour vos besoins</p>

          <div className="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>Critères</th>
                  <th>Archivage Physique</th>
                  <th>Archivage Électronique</th>
                  <th>GED (Alfresco)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Coût Initial</strong></td>
                  <td>Faible</td>
                  <td>Moyen</td>
                  <td>Élevé</td>
                </tr>
                <tr>
                  <td><strong>Coût de Maintenance</strong></td>
                  <td>Faible</td>
                  <td>Faible</td>
                  <td>Moyen</td>
                </tr>
                <tr>
                  <td><strong>Vitesse d'Accès</strong></td>
                  <td>Lent (heures/jours)</td>
                  <td>Rapide (minutes)</td>
                  <td>Très rapide (secondes)</td>
                </tr>
                <tr>
                  <td><strong>Espace Physique</strong></td>
                  <td>Important</td>
                  <td>Minimal</td>
                  <td>Minimal</td>
                </tr>
                <tr>
                  <td><strong>Sécurité</strong></td>
                  <td>Bonne</td>
                  <td>Très bonne</td>
                  <td>Excellente</td>
                </tr>
                <tr>
                  <td><strong>Collaboration</strong></td>
                  <td>Limitée</td>
                  <td>Limitée</td>
                  <td>Complète</td>
                </tr>
                <tr>
                  <td><strong>Conformité ISO</strong></td>
                  <td><i className="fas fa-check"></i> ISO 15489</td>
                  <td><i className="fas fa-check"></i> ISO 15489</td>
                  <td><i className="fas fa-check"></i> ISO 15489 + RGPD</td>
                </tr>
                <tr>
                  <td><strong>Pour Qui ?</strong></td>
                  <td>PME, Archives légales</td>
                  <td>PME + GED</td>
                  <td>Entreprises, Admin</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* PROCESS VISUALIZATION */}
      <section className="process-viz" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Notre Processus d'Archivage</h2>
          <p className="section-subtitle">Étapes clés pour garantir la qualité</p>

          <div className="process-steps">
            <div className="step" data-aos="zoom-in" data-aos-delay="0">
              <div className="step-number">1</div>
              <h3>Diagnostic</h3>
              <p>Analyse de vos besoins et de vos documents</p>
            </div>

            <div className="step" data-aos="zoom-in" data-aos-delay="100">
              <div className="step-number">2</div>
              <h3>Préparation</h3>
              <p>Classement et tri des documents</p>
            </div>

            <div className="step" data-aos="zoom-in" data-aos-delay="200">
              <div className="step-number">3</div>
              <h3>Exécution</h3>
              <p>Archivage ou numérisation</p>
            </div>

            <div className="step" data-aos="zoom-in" data-aos-delay="300">
              <div className="step-number">4</div>
              <h3>Indexation</h3>
              <p>Référencement et métadonnées</p>
            </div>

            <div className="step" data-aos="zoom-in" data-aos-delay="400">
              <div className="step-number">5</div>
              <h3>Stockage Sécurisé</h3>
              <p>Conservation en locaux ou serveurs</p>
            </div>

            <div className="step" data-aos="zoom-in" data-aos-delay="500">
              <div className="step-number">6</div>
              <h3>Support Continu</h3>
              <p>Maintenance et gestion long terme</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="case-studies" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Nos Réalisations d'Archivage</h2>
          <p className="section-subtitle">Succès concrets avec nos clients majeurs</p>

          <div className="cases-grid">
            {casesStudy.map((caseItem, index) => (
              <div 
                key={index} 
                className="case-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="case-image">
                  <img src={caseItem.image} alt={caseItem.client} />
                  <div className="case-overlay">
                    <span className="case-badge">Cas de Succès</span>
                  </div>
                </div>
                <div className="case-content">
                  <h3>{caseItem.client}</h3>
                  <p className="case-project"><strong>Projet :</strong> {caseItem.project}</p>
                  <p className="case-results"><strong>Résultats :</strong> {caseItem.results}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NORMES & CONFORMITÉ */}
      <section className="normes-conformite" data-aos="fade-up">
        <div className="container">
          <h2 data-aos="fade-down">Normes et Conformité</h2>
          <p className="section-subtitle">Votre garantie de qualité et légalité</p>

          <div className="normes-grid">
            <div className="norme-card" data-aos="zoom-in">
              <h3><i className="fas fa-trophy"></i> ISO 15489</h3>
              <p>Gestion des archives et documents</p>
              <p className="norme-description">Normes internationales pour la gestion documentaire et l'archivage</p>
            </div>

            <div className="norme-card" data-aos="zoom-in" data-aos-delay="100">
              <h3><i className="fas fa-clipboard-list"></i> ISO 9001</h3>
              <p>Qualité et gestion</p>
              <p className="norme-description">Certification qualité de nos services et processus</p>
            </div>

            <div className="norme-card" data-aos="zoom-in" data-aos-delay="200">
              <h3><i className="fas fa-lock"></i> RGPD</h3>
              <p>Protection des données</p>
              <p className="norme-description">Conformité complète aux réglementations de protection des données personnelles</p>
            </div>

            <div className="norme-card" data-aos="zoom-in" data-aos-delay="300">
              <h3><i className="fas fa-balance-scale"></i> Droit Sénégalais</h3>
              <p>Législation locale</p>
              <p className="norme-description">Respect des lois et délais de rétention applicables</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="archivage-cta" data-aos="fade-up">
        <div className="container">
          <h2>Prêt à transformer votre gestion documentaire ?</h2>
          <p>Nous vous proposons un diagnostic gratuit et sans engagement</p>
          <button className="cta-button" onClick={() => window.location.href = '/contact'}>
            Demander un Devis Gratuit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Archivage;