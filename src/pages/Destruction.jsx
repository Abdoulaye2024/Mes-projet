import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Destruction.css';

const BASE = import.meta.env.BASE_URL;

const Destruction = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const features = [
    {
      title: 'Broyage Sécurisé',
      description: 'Destruction physique complète des documents confidentiels selon les normes de sécurité les plus strictes.',
      icon: 'fas fa-shredder',
    },
    {
      title: 'Traçabilité Complète',
      description: 'Suivi en temps réel de chaque étape du processus de destruction avec certificats de conformité.',
      icon: 'fas fa-search',
    },
    {
      title: 'Conformité Réglementaire',
      description: 'Respect des normes légales pour la destruction d’archives sensibles et confidentielles.',
      icon: 'fas fa-gavel',
    },
    {
      title: 'Plan de Travail Personnalisé',
      description: 'Évaluation précise de vos besoins et élaboration d’un plan de destruction adapté à votre organisation.',
      icon: 'fas fa-clipboard-list',
    },
  ];

  const workflows = [
    {
      title: 'Collecte Sécurisée',
      description: 'Ramassage programmé des documents à détruire avec véhicules sécurisés et personnel formé.',
      icon: 'fas fa-truck',
    },
    {
      title: 'Tri et Validation',
      description: 'Vérification et tri des documents selon vos instructions avant destruction.',
      icon: 'fas fa-sort',
    },
    {
      title: 'Destruction Certifiée',
      description: 'Broyage professionnel avec certificats de destruction pour preuve légale.',
      icon: 'fas fa-certificate',
    },
    {
      title: 'Rapport Final',
      description: 'Livraison de rapports détaillés et certificats attestant de la destruction complète.',
      icon: 'fas fa-file-alt',
    },
  ];

  const security = [
    {
      title: 'Sécurité Maximale',
      description: 'Processus sécurisés de bout en bout pour garantir la confidentialité absolue.',
      icon: 'fas fa-shield-alt',
    },
    {
      title: 'Personnel Agréé',
      description: 'Équipes formées et habilitées pour manipuler des documents sensibles.',
      icon: 'fas fa-user-shield',
    },
    {
      title: 'Chaîne de Custodie',
      description: 'Traçabilité complète de la collecte à la destruction finale des documents.',
      icon: 'fas fa-link',
    },
    {
      title: 'Destruction Irréversible',
      description: 'Méthodes de destruction garantissant l’impossibilité de reconstitution des documents.',
      icon: 'fas fa-ban',
    },
  ];

  const integration = [
    {
      title: 'Intégration GED',
      description: 'Connexion avec vos systèmes de gestion documentaire pour une destruction programmée.',
      icon: 'fas fa-plug',
    },
    {
      title: 'Planification Automatisée',
      description: 'Calendrier de destruction automatique basé sur vos règles de conservation.',
      icon: 'fas fa-calendar-alt',
    },
    {
      title: 'Rapports Numériques',
      description: 'Certificats électroniques intégrables dans vos systèmes d’archivage.',
      icon: 'fas fa-digital-tachograph',
    },
    {
      title: 'Support Multi-Sites',
      description: 'Service de destruction pour entreprises multi-sites avec coordination centralisée.',
      icon: 'fas fa-building',
    },
  ];

  const benefits = [
    {
      title: 'Conformité Légale',
      description: 'Élimination des risques juridiques liés à la conservation excessive de documents.',
      icon: 'fas fa-balance-scale',
    },
    {
      title: 'Économie d’Espace',
      description: 'Libération d’espace de stockage physique et réduction des coûts associés.',
      icon: 'fas fa-warehouse',
    },
    {
      title: 'Protection des Données',
      description: 'Destruction sécurisée des données sensibles pour éviter les fuites d’information.',
      icon: 'fas fa-lock',
    },
    {
      title: 'Traçabilité RGPD',
      description: 'Preuve de destruction conforme aux exigences du RGPD et des normes de confidentialité.',
      icon: 'fas fa-user-secret',
    },
  ];

  const caseStudies = [
    {
      title: 'Banque Régionale',
      challenge: 'Destruction massive d’archives papier obsolètes.',
      result: 'Destruction de 50 tonnes de documents avec certification complète.',
      badge: 'Volume important',
    },
    {
      title: 'Cabinet Médical',
      challenge: 'Élimination sécurisée de dossiers patients confidentiels.',
      result: 'Conformité RGPD assurée avec traçabilité totale.',
      badge: 'Confidentialité',
    },
    {
      title: 'Entreprise Industrielle',
      challenge: 'Destruction de documents techniques et plans sensibles.',
      result: 'Processus accéléré avec réduction des coûts de 30%.',
      badge: 'Efficacité',
    },
  ];

  const normes = [
    {
      title: 'DIN 66399',
      description: 'Norme allemande pour la destruction sécurisée de supports de données.',
      icon: 'fas fa-award',
    },
    {
      title: 'ISO 21964',
      description: 'Norme internationale pour les services de destruction d’archives.',
      icon: 'fas fa-certificate',
    },
    {
      title: 'RGPD',
      description: 'Réglementation européenne sur la protection des données personnelles.',
      icon: 'fas fa-euro-sign',
    },
    {
      title: 'Normes Locales',
      description: 'Respect des réglementations nationales sur la destruction documentaire.',
      icon: 'fas fa-flag',
    },
  ];

  return (
    <div className="destruction-page">
      <section className="destruction-header" data-aos="fade-down">
        <div className="header-content">
          <h1 className="header-title">Destruction de Documents Sécurisée</h1>
          <p className="header-subtitle">
            Éliminez vos documents confidentiels en toute sécurité avec nos services de destruction certifiée, conformes aux normes les plus strictes.
          </p>
        </div>
      </section>

      <section className="destruction-intro" data-aos="fade-up">
        <div className="container destruction-grid">
          <div>
            <h2>Un service de destruction professionnelle pour votre sécurité</h2>
            <p className="section-subtitle">La destruction sécurisée est essentielle pour protéger vos données sensibles et respecter les réglementations.</p>
            <ul className="destruction-intro-list">
              <li><strong>Évaluation personnalisée</strong> de vos besoins en destruction documentaire.</li>
              <li><strong>Processus certifié</strong> avec traçabilité complète et certificats de conformité.</li>
              <li><strong>Conformité réglementaire</strong> RGPD, normes ISO et réglementations locales.</li>
              <li><strong>Plan de travail adapté</strong> à votre organisation et vos contraintes.</li>
            </ul>
          </div>
          <div className="destruction-intro-image" data-aos="zoom-in">
            <img src={`${BASE}image/Destruction_sécurisée.jpg`} alt="Destruction Sécurisée" />
          </div>
        </div>
      </section>

      <section className="destruction-features" data-aos="fade-up">
        <div className="container">
          <h2>Fonctionnalités Clés</h2>
          <p className="section-subtitle">Tout ce dont vous avez besoin pour une destruction sécurisée et conforme.</p>
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

      <section className="destruction-workflows" data-aos="fade-up">
        <div className="container">
          <h2>Processus de Destruction</h2>
          <p className="section-subtitle">Un workflow sécurisé et transparent pour vos documents sensibles.</p>
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

      <section className="destruction-security" data-aos="fade-up">
        <div className="container">
          <h2>Sécurité & Conformité</h2>
          <p className="section-subtitle">Une destruction qui protège vos informations et respecte les normes.</p>
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

      <section className="destruction-integration" data-aos="fade-up">
        <div className="container">
          <h2>Intégrations & Services</h2>
          <p className="section-subtitle">Connexion avec vos processus existants pour une gestion optimale.</p>
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

      <section className="destruction-benefits" data-aos="fade-up">
        <div className="container">
          <h2>Avantages pour votre organisation</h2>
          <p className="section-subtitle">Des bénéfices immédiats et durables pour votre entreprise.</p>
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

      <section className="destruction-cases" data-aos="fade-up">
        <div className="container">
          <h2>Cas Clients</h2>
          <p className="section-subtitle">Exemples concrets de destruction sécurisée avec ArchivPro.</p>
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

      <section className="destruction-normes" data-aos="fade-up">
        <div className="container">
          <h2>Normes & Certifications</h2>
          <p className="section-subtitle">Une destruction conforme et certifiée pour sécuriser vos informations.</p>
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

      <section className="destruction-cta" data-aos="fade-up">
        <div className="container">
          <h2>Protégez vos données avec une destruction certifiée</h2>
          <p>Contactez nos experts pour une évaluation personnalisée de vos besoins en destruction.</p>
          <button onClick={() => window.location.href = '/contact'}>Demander un devis</button>
        </div>
      </section>
    </div>
  );
};

export default Destruction;