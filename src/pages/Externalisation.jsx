import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Externalisation.css';

const Externalisation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const features = [
    {
      title: 'Stockage Sécurisé',
      description: 'Entreposage dans des installations de haute sécurité avec contrôle d’accès 24/7.',
      icon: 'fas fa-warehouse',
    },
    {
      title: 'Gestion Externalisée',
      description: 'Prise en charge complète de vos archives par des experts qualifiés.',
      icon: 'fas fa-handshake',
    },
    {
      title: 'Accès Rapide',
      description: 'Récupération de documents en quelques heures avec service express disponible.',
      icon: 'fas fa-clock',
    },
    {
      title: 'Plan de Travail Personnalisé',
      description: 'Évaluation de vos besoins et élaboration d’un plan d’externalisation adapté.',
      icon: 'fas fa-clipboard-list',
    },
  ];

  const workflows = [
    {
      title: 'Collecte Organisée',
      description: 'Ramassage planifié de vos archives avec inventaire et conditionnement sécurisé.',
      icon: 'fas fa-boxes',
    },
    {
      title: 'Indexation et Classement',
      description: 'Catalogage numérique de vos documents pour une recherche optimale.',
      icon: 'fas fa-tags',
    },
    {
      title: 'Stockage Climatique',
      description: 'Conservation dans des conditions optimales pour préserver vos documents.',
      icon: 'fas fa-thermometer-half',
    },
    {
      title: 'Service de Récupération',
      description: 'Demande et livraison de documents selon vos besoins opérationnels.',
      icon: 'fas fa-truck',
    },
  ];

  const security = [
    {
      title: 'Sécurité Physique',
      description: 'Installations protégées avec surveillance vidéo et contrôle d’accès biométrique.',
      icon: 'fas fa-shield-alt',
    },
    {
      title: 'Protection Incendie',
      description: 'Systèmes de détection et d’extinction automatique pour une sécurité maximale.',
      icon: 'fas fa-fire-extinguisher',
    },
    {
      title: 'Assurance Complète',
      description: 'Couverture assurance pour vos archives avec garanties financières.',
      icon: 'fas fa-file-contract',
    },
    {
      title: 'Conformité RGPD',
      description: 'Gestion des données personnelles conforme aux réglementations européennes.',
      icon: 'fas fa-lock',
    },
  ];

  const integration = [
    {
      title: 'Connexion GED',
      description: 'Intégration transparente avec vos systèmes de gestion documentaire existants.',
      icon: 'fas fa-plug',
    },
    {
      title: 'Portail Client',
      description: 'Accès en ligne sécurisé pour consulter et commander vos documents.',
      icon: 'fas fa-globe',
    },
    {
      title: 'API Disponible',
      description: 'Interfaces de programmation pour automatiser les demandes de récupération.',
      icon: 'fas fa-code',
    },
    {
      title: 'Suivi en Temps Réel',
      description: 'Tableau de bord pour monitorer l’état de vos archives externalisées.',
      icon: 'fas fa-chart-line',
    },
  ];

  const benefits = [
    {
      title: 'Réduction des Coûts',
      description: 'Économies significatives sur les coûts de stockage et de gestion interne.',
      icon: 'fas fa-dollar-sign',
    },
    {
      title: 'Libération d’Espace',
      description: 'Récupération de locaux pour des activités plus productives.',
      icon: 'fas fa-expand-arrows-alt',
    },
    {
      title: 'Expertise Spécialisée',
      description: 'Accès à des compétences professionnelles en archivage et conservation.',
      icon: 'fas fa-user-tie',
    },
    {
      title: 'Flexibilité Opérationnelle',
      description: 'Adaptation rapide à vos besoins changeants sans investissement lourd.',
      icon: 'fas fa-sync-alt',
    },
  ];

  const caseStudies = [
    {
      title: 'Groupe Hospitalier',
      challenge: 'Externalisation d’archives médicales volumineuses.',
      result: 'Récupération de 2000 m² d’espace et réduction des coûts de 35%.',
      badge: 'Efficacité',
    },
    {
      title: 'Administration Publique',
      challenge: 'Gestion externalisée d’archives administratives historiques.',
      result: 'Accès sécurisé et conservation optimale pour 50 ans d’archives.',
      badge: 'Durabilité',
    },
    {
      title: 'Entreprise Industrielle',
      challenge: 'Stockage hors-site de documents techniques sensibles.',
      result: 'Sécurité renforcée et récupération express en cas d’urgence.',
      badge: 'Sécurité',
    },
  ];

  const normes = [
    {
      title: 'ISO 9001',
      description: 'Qualité de service et amélioration continue des processus.',
      icon: 'fas fa-award',
    },
    {
      title: 'ISO 15489',
      description: 'Norme internationale pour la gestion documentaire.',
      icon: 'fas fa-certificate',
    },
    {
      title: 'RGPD',
      description: 'Protection et confidentialité des données personnelles.',
      icon: 'fas fa-user-secret',
    },
    {
      title: 'Normes Locales',
      description: 'Respect des réglementations nationales sur l’archivage.',
      icon: 'fas fa-flag',
    },
  ];

  return (
    <div className="externalisation-page">
      <section className="externalisation-header" data-aos="fade-down">
        <div className="header-content">
          <h1 className="header-title">Externalisation d'Archivage</h1>
          <p className="header-subtitle">
            Confiez vos archives à des professionnels et concentrez-vous sur votre cœur de métier avec nos services d'externalisation complète.
          </p>
        </div>
      </section>

      <section className="externalisation-intro" data-aos="fade-up">
        <div className="container externalisation-grid">
          <div>
            <h2>Une externalisation d'archivage de confiance</h2>
            <p className="section-subtitle">L'externalisation permet de déléguer la gestion de vos archives tout en gardant le contrôle.</p>
            <ul className="externalisation-intro-list">
              <li><strong>Évaluation personnalisée</strong> de vos besoins en archivage externalisé.</li>
              <li><strong>Processus sécurisé</strong> avec traçabilité complète et certificats de conformité.</li>
              <li><strong>Conformité réglementaire</strong> RGPD, normes ISO et réglementations locales.</li>
              <li><strong>Plan de travail adapté</strong> à votre organisation et vos contraintes.</li>
            </ul>
          </div>
          <div className="externalisation-intro-image" data-aos="zoom-in">
            <img src={`${BASE}image/Externalisation_Archivage.jpg`} alt="Externalisation d'Archivage" />
          </div>
        </div>
      </section>

      <section className="externalisation-features" data-aos="fade-up">
        <div className="container">
          <h2>Fonctionnalités Clés</h2>
          <p className="section-subtitle">Tout ce dont vous avez besoin pour une externalisation réussie.</p>
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

      <section className="externalisation-workflows" data-aos="fade-up">
        <div className="container">
          <h2>Processus d'Externalisation</h2>
          <p className="section-subtitle">Un workflow transparent et efficace pour vos archives.</p>
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

      <section className="externalisation-security" data-aos="fade-up">
        <div className="container">
          <h2>Sécurité & Conformité</h2>
          <p className="section-subtitle">Une externalisation qui protège vos documents et respecte les normes.</p>
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

      <section className="externalisation-integration" data-aos="fade-up">
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

      <section className="externalisation-benefits" data-aos="fade-up">
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

      <section className="externalisation-cases" data-aos="fade-up">
        <div className="container">
          <h2>Cas Clients</h2>
          <p className="section-subtitle">Exemples concrets d'externalisation réussie avec ArchivPro.</p>
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

      <section className="externalisation-normes" data-aos="fade-up">
        <div className="container">
          <h2>Normes & Certifications</h2>
          <p className="section-subtitle">Une externalisation conforme et certifiée pour sécuriser vos informations.</p>
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

      <section className="externalisation-cta" data-aos="fade-up">
        <div className="container">
          <h2>Externalisez vos archives en toute sérénité</h2>
          <p>Contactez nos experts pour une évaluation personnalisée de vos besoins d'externalisation.</p>
          <button onClick={() => window.location.href = '/contact'}>Demander un devis</button>
        </div>
      </section>
    </div>
  );
};

export default Externalisation;