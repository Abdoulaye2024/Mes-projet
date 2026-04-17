import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './GED.css';

const GED = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const features = [
    {
      title: 'Plateforme Alfresco',
      description: 'Un système GED moderne, sécurisé et entièrement personnalisable pour gérer vos documents d’entreprise.',
      icon: '📁',
    },
    {
      title: 'Recherche Full-Text',
      description: 'Accédez aux documents en quelques secondes grâce à l’indexation complète et la recherche avancée.',
      icon: '🔍',
    },
    {
      title: 'Workflows Automatisés',
      description: 'Automatisez vos processus administratifs, validation et circulation documentaire.',
      icon: '⚙️',
    },
    {
      title: 'Contrôle d’Accès',
      description: 'Permissions granulaires pour garantir que chaque collaborateur ne voit que ce qui le concerne.',
      icon: '🔐',
    },
  ];

  const workflows = [
    {
      title: 'Validation de documents',
      description: 'Routage automatique des documents entre services jusqu’à l’approbation finale.',
      icon: '✅',
    },
    {
      title: 'Gestion des contrats',
      description: 'Suivi des dates de signature, des renouvellements et des alertes de conformité.',
      icon: '📜',
    },
    {
      title: 'Archivage dynamique',
      description: 'Archivage intelligent avec règles de conservation et restitution rapide.',
      icon: '🗄️',
    },
    {
      title: 'Flux de travail RH',
      description: 'Processus de dossiers employés, contrats, formations et évaluations centralisés.',
      icon: '👥',
    },
  ];

  const security = [
    {
      title: 'RGPD et ISO',
      description: 'Respect strict des normes RGPD et des meilleures pratiques ISO de gestion documentaire.',
      icon: '🛡️',
    },
    {
      title: 'Traçabilité complète',
      description: 'Journalisation de toutes les actions, modifications et accès aux documents.',
      icon: '📊',
    },
    {
      title: 'Sauvegarde redondante',
      description: 'Copies automatiques sur plusieurs serveurs pour une disponibilité maximale.',
      icon: '💾',
    },
    {
      title: 'Sécurité des accès',
      description: 'Authentification multi-facteurs et sesssions sécurisées pour les utilisateurs.',
      icon: '🔑',
    },
  ];

  const integration = [
    {
      title: 'Connecteurs métiers',
      description: 'Intégration simple avec SAP, Odoo, SharePoint, Microsoft 365 et autres ERP.',
      icon: '🔗',
    },
    {
      title: 'API REST',
      description: 'Accès automatisé aux documents et aux métadonnées via API dédiée.',
      icon: '🧩',
    },
    {
      title: 'Import / Export',
      description: 'Migration structurée de vos documents existants vers la GED Alfresco.',
      icon: '📤',
    },
    {
      title: 'Connexion mobile',
      description: 'Accès sécurisé depuis smartphone et tablette, partout et en tout temps.',
      icon: '📱',
    },
  ];

  const benefits = [
    {
      title: 'Visibilité totale',
      description: 'Tous vos documents sont centralisés et accessibles en quelques clics.',
      icon: '👁️',
    },
    {
      title: 'Réduction des délais',
      description: 'Processus accélérés grâce aux validations automatiques et notifications intelligentes.',
      icon: '⏱️',
    },
    {
      title: 'Coût maîtrisé',
      description: 'Réduction des impressions, du stockage papier et des frais de gestion documentaire.',
      icon: '💰',
    },
    {
      title: 'Collaboration fluide',
      description: 'Partage de documents sécurisé entre équipes, partenaires et prestataires.',
      icon: '🤝',
    },
  ];

  const caseStudies = [
    {
      title: 'Groupe Industriel',
      challenge: 'Dématérialisation des dossiers fournisseurs et factures.',
      result: 'Cycle de validation réduit de 40 % et traçabilité renforcée.',
      badge: 'Évolution rapide',
    },
    {
      title: 'Cabinet d’avocats',
      challenge: 'Gestion sécurisée des contrats et dossiers clients.',
      result: 'Accès juridique sécurisé et archivage conforme RGPD.',
      badge: 'Conformité',
    },
    {
      title: 'Administration locale',
      challenge: 'Centralisation des actes administratifs et des archives.',
      result: 'Recherche instantanée et réduction de l’espace physique.',
      badge: 'Efficacité',
    },
  ];

  const normes = [
    {
      title: 'ISO 15489',
      description: 'Norme internationale pour la gestion documentaire.',
      icon: '🏆',
    },
    {
      title: 'ISO 9001',
      description: 'Qualité de service et amélioration continue.',
      icon: '✔️',
    },
    {
      title: 'RGPD',
      description: 'Protection et confidentialité des données personnelles.',
      icon: '🔒',
    },
    {
      title: 'Archivage légal',
      description: 'Conservation conforme aux obligations réglementaires.',
      icon: '📚',
    },
  ];

  return (
    <div className="ged-page">
      <section className="ged-header" data-aos="fade-down">
        <div className="header-content">
          <h1 className="header-title">Gestion Électronique des Documents (GED)</h1>
          <p className="header-subtitle">
            Maîtrisez la circulation de vos documents, sécurisez vos informations et automatisez vos processus avec une GED Alfresco adaptée à votre organisation.
          </p>
        </div>
      </section>

      <section className="ged-intro" data-aos="fade-up">
        <div className="container ged-grid">
          <div>
            <h2>Une GED performante pour piloter votre transformation digitale</h2>
            <p className="section-subtitle">La GED n’est pas seulement un outil documentaire, c’est un levier d’efficacité et de conformité.</p>
            <ul className="ged-intro-list">
              <li><strong>Indexation intelligente</strong> pour retrouver tout document rapidement.</li>
              <li><strong>Processus automatisés</strong> pour réduire les délais de validation.</li>
              <li><strong>Gestion des droits</strong> avec accès personnalisé.</li>
              <li><strong>Archivage règlementaire</strong> pour vos obligations légales.</li>
            </ul>
          </div>
          <div className="ged-intro-image" data-aos="zoom-in">
            <img src="/image/Gestion_Electronique.jpg" alt="GED Alfresco" />
          </div>
        </div>
      </section>

      <section className="ged-features" data-aos="fade-up">
        <div className="container">
          <h2>Fonctionnalités Clés</h2>
          <p className="section-subtitle">Tout ce dont votre entreprise a besoin pour digitaliser ses documents.</p>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ged-workflows" data-aos="fade-up">
        <div className="container">
          <h2>Automatisation des Workflows</h2>
          <p className="section-subtitle">Des processus fluides pour réduire les tâches manuelles.</p>
          <div className="workflow-grid">
            {workflows.map((workflow, index) => (
              <div key={index} className="workflow-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-icon">{workflow.icon}</div>
                <h3>{workflow.title}</h3>
                <p>{workflow.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ged-security" data-aos="fade-up">
        <div className="container">
          <h2>Sécurité & Conformité</h2>
          <p className="section-subtitle">Une GED qui protège vos documents et respecte les normes réglementaires.</p>
          <div className="security-grid">
            {security.map((item, index) => (
              <div key={index} className="security-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ged-integration" data-aos="fade-up">
        <div className="container">
          <h2>Intégrations & API</h2>
          <p className="section-subtitle">Connexion complète avec vos outils métiers existants.</p>
          <div className="integration-grid">
            {integration.map((item, index) => (
              <div key={index} className="integration-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ged-benefits" data-aos="fade-up">
        <div className="container">
          <h2>Avantages pour votre organisation</h2>
          <p className="section-subtitle">Des gains clairs et mesurables dès les premières semaines.</p>
          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <div key={index} className="benefit-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ged-cases" data-aos="fade-up">
        <div className="container">
          <h2>Cas Clients</h2>
          <p className="section-subtitle">Exemples concrets de réussite GED avec ArchivPro.</p>
          <div className="cases-grid">
            {caseStudies.map((item, index) => (
              <div key={index} className="case-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <h3>{item.title}</h3>
                <p>{item.challenge}</p>
                <p>{item.result}</p>
                <span className="case-badge">{item.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ged-normes" data-aos="fade-up">
        <div className="container">
          <h2>Normes & Certifications</h2>
          <p className="section-subtitle">Une GED conforme et certifiée pour sécuriser vos informations.</p>
          <div className="normes-grid">
            {normes.map((item, index) => (
              <div key={index} className="norme-card" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ged-cta" data-aos="fade-up">
        <div className="container">
          <h2>Passez à une GED performante dès maintenant</h2>
          <p>Contactez nos experts pour une étude personnalisée de votre projet GED Alfresco.</p>
          <button onClick={() => window.location.href = '/contact'}>Demander un devis</button>
        </div>
      </section>
    </div>
  );
};

export default GED;