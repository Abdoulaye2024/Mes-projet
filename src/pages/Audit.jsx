import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Audit.css';

const Audit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const features = [
    {
      title: 'Audit de Conformité',
      description: 'Évaluation de la conformité de vos archives aux normes légales et réglementaires.',
      icon: 'fas fa-check-circle',
    },
    {
      title: 'Évaluation des Risques',
      description: 'Identification et analyse des risques liés à la gestion de vos documents.',
      icon: 'fas fa-exclamation-triangle',
    },
    {
      title: 'Inventaire Complet',
      description: 'Répertoriage exhaustif de vos archives avec classification et évaluation.',
      icon: 'fas fa-list-alt',
    },
    {
      title: 'Plan de Travail Personnalisé',
      description: 'Évaluation de vos besoins et élaboration d’un plan d’audit adapté.',
      icon: 'fas fa-clipboard-list',
    },
  ];

  const workflows = [
    {
      title: 'Planification Stratégique',
      description: 'Définition des objectifs, périmètre et méthodologie de l’audit d’archives.',
      icon: 'fas fa-calendar-alt',
    },
    {
      title: 'Collecte de Données',
      description: 'Examen approfondi des processus, documents et systèmes d’archivage.',
      icon: 'fas fa-search',
    },
    {
      title: 'Analyse et Évaluation',
      description: 'Analyse des écarts, risques et opportunités d’amélioration identifiés.',
      icon: 'fas fa-chart-bar',
    },
    {
      title: 'Rapport et Recommandations',
      description: 'Livraison d’un rapport détaillé avec plan d’actions correctives.',
      icon: 'fas fa-file-alt',
    },
  ];

  const security = [
    {
      title: 'Confidentialité Garantie',
      description: 'Traitement confidentiel de toutes les informations sensibles examinées.',
      icon: 'fas fa-lock',
    },
    {
      title: 'Méthodologie Normalisée',
      description: 'Application de standards d’audit reconnus pour une évaluation objective.',
      icon: 'fas fa-balance-scale',
    },
    {
      title: 'Traçabilité Complète',
      description: 'Documentation détaillée de toutes les étapes et conclusions de l’audit.',
      icon: 'fas fa-history',
    },
    {
      title: 'Indépendance',
      description: 'Auditeurs indépendants pour garantir l’impartialité des conclusions.',
      icon: 'fas fa-user-shield',
    },
  ];

  const integration = [
    {
      title: 'Intégration Systèmes',
      description: 'Connexion avec vos GED, ERP et autres systèmes pour un audit intégré.',
      icon: 'fas fa-plug',
    },
    {
      title: 'Outils d’Audit Automatisés',
      description: 'Utilisation d’outils logiciels pour accélérer les vérifications et analyses.',
      icon: 'fas fa-cogs',
    },
    {
      title: 'Suivi des Actions',
      description: 'Tableau de bord pour monitorer la mise en œuvre des recommandations.',
      icon: 'fas fa-tasks',
    },
    {
      title: 'Audits Récurrents',
      description: 'Planification d’audits périodiques pour maintenir la conformité continue.',
      icon: 'fas fa-sync-alt',
    },
  ];

  const benefits = [
    {
      title: 'Assurance Conformité',
      description: 'Certification de la conformité de vos archives aux exigences légales.',
      icon: 'fas fa-shield-alt',
    },
    {
      title: 'Réduction des Risques',
      description: 'Identification précoce des vulnérabilités et mise en place de mesures correctives.',
      icon: 'fas fa-minus-circle',
    },
    {
      title: 'Amélioration Continue',
      description: 'Recommandations pour optimiser vos processus d’archivage et de gestion.',
      icon: 'fas fa-arrow-up',
    },
    {
      title: 'Préparation aux Contrôles',
      description: 'Renforcement de votre préparation aux audits externes et inspections.',
      icon: 'fas fa-check-double',
    },
  ];

  const caseStudies = [
    {
      title: 'Banque Internationale',
      challenge: 'Audit de conformité RGPD pour 10 ans d’archives clients.',
      result: 'Identification de 95% de conformité et plan de correction pour les écarts.',
      badge: 'Conformité',
    },
    {
      title: 'Industrie Pharmaceutique',
      challenge: 'Évaluation des risques d’archivage de données cliniques sensibles.',
      result: 'Réduction des risques de 40% avec nouvelles procédures de sécurité.',
      badge: 'Sécurité',
    },
    {
      title: 'Administration Régionale',
      challenge: 'Inventaire complet d’archives historiques et évaluation de conservation.',
      result: 'Classification optimisée et économies de 25% sur le stockage.',
      badge: 'Efficacité',
    },
  ];

  const normes = [
    {
      title: 'ISO 19011',
      description: 'Lignes directrices pour l’audit des systèmes de management.',
      icon: 'fas fa-award',
    },
    {
      title: 'RGPD',
      description: 'Réglementation sur la protection des données personnelles.',
      icon: 'fas fa-user-secret',
    },
    {
      title: 'Normes Sectorielles',
      description: 'Respect des normes spécifiques à votre secteur d’activité.',
      icon: 'fas fa-industry',
    },
    {
      title: 'Standards Internationaux',
      description: 'Application des meilleures pratiques d’audit au niveau mondial.',
      icon: 'fas fa-globe',
    },
  ];

  return (
    <div className="audit-page">
      <section className="audit-header" data-aos="fade-down">
        <div className="header-content">
          <h1 className="header-title">Audit d'Archives</h1>
          <p className="header-subtitle">
            Évaluez la conformité et l'efficacité de vos archives avec nos audits spécialisés, pour une gestion documentaire optimale et sécurisée.
          </p>
        </div>
      </section>

      <section className="audit-intro" data-aos="fade-up">
        <div className="container audit-grid">
          <div>
            <h2>Un audit d'archives pour maîtriser vos risques</h2>
            <p className="section-subtitle">L'audit permet d'évaluer la qualité de votre gestion documentaire et d'identifier les axes d'amélioration.</p>
            <ul className="audit-intro-list">
              <li><strong>Évaluation personnalisée</strong> de vos besoins en audit d'archives.</li>
              <li><strong>Processus méthodique</strong> avec analyse approfondie et recommandations précises.</li>
              <li><strong>Conformité réglementaire</strong> RGPD, normes ISO et réglementations sectorielles.</li>
              <li><strong>Plan de travail adapté</strong> à votre organisation et vos contraintes.</li>
            </ul>
          </div>
          <div className="audit-intro-image" data-aos="zoom-in">
            <img src={`${BASE}image/Audit_Conseil.jpg`} alt="Audit d'Archives" />
          </div>
        </div>
      </section>

      <section className="audit-features" data-aos="fade-up">
        <div className="container">
          <h2>Fonctionnalités Clés</h2>
          <p className="section-subtitle">Tout ce dont vous avez besoin pour un audit complet et efficace.</p>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-icon"><i className={feature.icon}></i></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="audit-workflows" data-aos="fade-up">
        <div className="container">
          <h2>Processus d'Audit</h2>
          <p className="section-subtitle">Une méthodologie structurée pour des résultats fiables.</p>
          <div className="workflow-grid">
            {workflows.map((workflow, index) => (
              <div key={index} className="workflow-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-icon"><i className={workflow.icon}></i></div>
                <h3>{workflow.title}</h3>
                <p>{workflow.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="audit-security" data-aos="fade-up">
        <div className="container">
          <h2>Qualité & Fiabilité</h2>
          <p className="section-subtitle">Un audit qui garantit l'objectivité et la confidentialité.</p>
          <div className="security-grid">
            {security.map((item, index) => (
              <div key={index} className="security-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-icon"><i className={item.icon}></i></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="audit-integration" data-aos="fade-up">
        <div className="container">
          <h2>Intégrations & Outils</h2>
          <p className="section-subtitle">Connexion avec vos systèmes pour un audit intégré.</p>
          <div className="integration-grid">
            {integration.map((item, index) => (
              <div key={index} className="integration-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-icon"><i className={item.icon}></i></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="audit-benefits" data-aos="fade-up">
        <div className="container">
          <h2>Avantages pour votre organisation</h2>
          <p className="section-subtitle">Des bénéfices tangibles pour renforcer votre gouvernance documentaire.</p>
          <div className="benefits-grid">
            {benefits.map((item, index) => (
              <div key={index} className="benefit-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="card-icon"><i className={item.icon}></i></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="audit-cases" data-aos="fade-up">
        <div className="container">
          <h2>Cas Clients</h2>
          <p className="section-subtitle">Exemples concrets d'audits réussis avec ArchivPro.</p>
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

      <section className="audit-normes" data-aos="fade-up">
        <div className="container">
          <h2>Normes & Standards</h2>
          <p className="section-subtitle">Un audit conforme aux normes internationales et sectorielles.</p>
          <div className="normes-grid">
            {normes.map((item, index) => (
              <div key={index} className="norme-card" data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="card-icon"><i className={item.icon}></i></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="audit-cta" data-aos="fade-up">
        <div className="container">
          <h2>Évaluez vos archives dès maintenant</h2>
          <p>Contactez nos experts pour planifier un audit personnalisé de vos archives.</p>
          <button onClick={() => window.location.href = '/contact'}>Demander un audit</button>
        </div>
      </section>
    </div>
  );
};

export default Audit;