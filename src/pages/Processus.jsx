import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Processus.css';

const Processus = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const etapes = [
    {
      id: 1,
      numero: "01",
      titre: "Audit & Diagnostic",
      icon: "fas fa-search",
      color: "#c9873a",
      description: "Nous effectuons une analyse complète de votre situation actuelle",
      details: "Notre équipe se rend dans vos locaux pour évaluer vos archives physiques et numériques, comprendre vos flux documentaires et identifier vos besoins spécifiques.",
      actions: [
        "Visite sur site pour inventaire préalable",
        "Analyse des volumes et types de documents",
        "Évaluation des délais de conservation légaux",
        "Identification des enjeux et risques",
        "Audit de conformité réglementaire"
      ],
      livrables: [
        "Rapport d'audit détaillé",
        "Évaluation des volumes (m³)",
        "Liste des délais de conservation",
        "Recommandations préliminaires",
        "Photo documentation des archives"
      ],
      duree: "2-3 jours",
      cout: "Gratuit"
    },
    {
      id: 2,
      numero: "02",
      titre: "Devis Personnalisé",
      icon: "fas fa-file-invoice-dollar",
      color: "#e09848",
      description: "Élaboration d'une offre adaptée à votre budget et besoins",
      details: "Basé sur l'audit, nous proposons une solution sur mesure avec tarification dégressif selon les volumes. Vous recevez un devis détaillé, transparent, sans frais cachés.",
      actions: [
        "Conception d'une solution adaptée",
        "Calcul des tarifs dégressifs",
        "Présentation des options de services",
        "Planification du calendrier d'intervention",
        "Définition des points de contact"
      ],
      livrables: [
        "Devis détaillé et signé",
        "Plan d'action priorisé",
        "Calendrier d'intervention",
        "Description des services inclus",
        "Conditions générales de prestation"
      ],
      duree: "2-5 jours",
      cout: "Gratuit"
    },
    {
      id: 3,
      numero: "03",
      titre: "Collecte & Traitement",
      icon: "fas fa-boxes",
      color: "#1a2438",
      description: "Récupération et traitement sécurisé de vos archives",
      details: "Nos équipes gèrent la collecte, l'inventaire complet, la codification des boîtes et le transport sécurisé vers nos entrepôts climatisés à Dakar.",
      actions: [
        "Collecte physique à vos locaux ou points de stockage",
        "Inventaire article par article",
        "Codification et étiquetage des boîtes",
        "Numérisation pour archivage numérique (option)",
        "Transport sécurisé via véhicules dédiés"
      ],
      livrables: [
        "Inventaire complet numérisé",
        "Fichier d'indexation des boîtes",
        "Photos de chaque boîte",
        "Certificat de collecte signé",
        "Accès à la plateforme de suivi en ligne"
      ],
      duree: "1-4 semaines",
      cout: "Selon devis"
    },
    {
      id: 4,
      numero: "04",
      titre: "Suivi en Continu",
      icon: "fas fa-chart-line",
      color: "#f5e0c0",
      description: "Accès 24h/24 à vos archives avec support permanent",
      details: "Vous accédez à vos documents via notre plateforme web sécurisée. Notre équipe assure la gestion, l'inventaire mis à jour et répond à vos demandes d'accès en 24h.",
      actions: [
        "Stockage en entrepôt climatisé et sécurisé",
        "Gestion de l'inventaire en temps réel",
        "Demandes d'accès traitées en 24h",
        "Mise à jour des délais de conservation",
        "Support technique dédié 24h/24"
      ],
      livrables: [
        "Accès à la plateforme web 24h/24",
        "Rapports mensuels d'activité",
        "Alertes sur délais d'archivage",
        "Support email et téléphone dédié",
        "Certificat de destruction conforme RGPD"
      ],
      duree: "Continu",
      cout: "Mensuel / Annuel"
    }
  ];

  const timelines = [
    {
      phase: "Phase 1: Préparation",
      duree: "Semaine 1",
      taches: ["Audit diagnostique", "Planification logistique", "Mobilisation équipes"]
    },
    {
      phase: "Phase 2: Collecte",
      duree: "Semaines 2-4",
      taches: ["Récupération documents", "Inventaire numérisé", "Transport sécurisé"]
    },
    {
      phase: "Phase 3: Traitement",
      duree: "Semaines 5-8",
      taches: ["Codification boîtes", "Numérisation (option)", "Intégration BDD"]
    },
    {
      phase: "Phase 4: Opérationnel",
      duree: "Dès semaine 9",
      taches: ["Accès plateforme", "Formation équipes", "Support démarrage"]
    }
  ];

  const conditions = [
    {
      titre: "Sécurité garantie",
      description: "Entrepôt climatisé 24h/24, accès contrôlé, surveillance vidéo",
      icon: "fas fa-shield-alt"
    },
    {
      titre: "Transparence totale",
      description: "Accès web à l'inventaire complet de vos archives à tout moment",
      icon: "fas fa-eye"
    },
    {
      titre: "Conformité légale",
      description: "Respect des délais de conservation, RGPD et normes ISO",
      icon: "fas fa-check-circle"
    },
    {
      titre: "Flexibilité",
      description: "Adaptation des services selon l'évolution de vos besoins",
      icon: "fas fa-arrows-alt"
    },
    {
      titre: "Réactivité",
      description: "Demandes d'accès traitées en 24h maximum",
      icon: "fas fa-bolt"
    },
    {
      titre: "Support dédié",
      description: "Équipe disponible par email, téléphone et chat en ligne",
      icon: "fas fa-headset"
    }
  ];

  return (
    <>
      {/* HEADER PROCESSUS */}
      <section className="processus-header" data-aos="fade-down">
        <div className="header-content">
          <img src="/image/logo-archive.png" alt="ArchivPro Dakar" className="header-logo" />
          <h1 className="header-title">Notre Méthode</h1>
          <p className="header-subtitle">Un processus éprouvé en 4 étapes simples et transparentes</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="processus-intro">
        <div className="container">
          <div className="intro-content" data-aos="fade-up">
            <h2>Comment nous travaillons</h2>
            <p>
              Depuis 2012, ArchivPro a perfectionné une méthode de gestion documentaire qui garantit 
              sécurité, conformité et efficacité. Notre approche en 4 étapes a été testée sur plus de 
              300 projets et adaptée à tous les secteurs d'activité.
            </p>
            <div className="intro-stats">
              <div className="stat-box">
                <h4>99.9%</h4>
                <p>Taux de satisfaction</p>
              </div>
              <div className="stat-box">
                <h4>300+</h4>
                <p>Clients accompagnés</p>
              </div>
              <div className="stat-box">
                <h4>50M+</h4>
                <p>Documents archivés</p>
              </div>
              <div className="stat-box">
                <h4>24h</h4>
                <p>Temps d'accès garanti</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÉTAPES DÉTAILLÉES */}
      <section className="etapes-section">
        {etapes.map((etape, index) => (
          <div key={etape.id} className={`etape-container ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <div className="container">
              <div className="etape-content">
                {/* Gauche: Contenus */}
                <div className="etape-left" data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                  <div className="etape-number" style={{ '--number-color': etape.color }}>
                    {etape.numero}
                  </div>
                  <h2 className="etape-titre">{etape.titre}</h2>
                  <p className="etape-desc">{etape.details}</p>

                  {/* Actions */}
                  <div className="etape-section">
                    <h4>Ce qu'on fait</h4>
                    <ul className="etape-list">
                      {etape.actions.map((action, idx) => (
                        <li key={idx}>
                          <i className="fas fa-check"></i>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Durée et coût */}
                  <div className="etape-meta">
                    <div className="meta-item">
                      <i className="fas fa-clock"></i>
                      <div>
                        <label>Durée</label>
                        <span>{etape.duree}</span>
                      </div>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-tag"></i>
                      <div>
                        <label>Coût</label>
                        <span>{etape.cout}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Droite: Livrables */}
                <div className="etape-right" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                  <div className="etape-icon" style={{ '--icon-bg': etape.color }}>
                    <i className={etape.icon}></i>
                  </div>
                  <div className="etape-livrables">
                    <h4>
                      <i className="fas fa-gift"></i>
                      Livrables
                    </h4>
                    <ul>
                      {etape.livrables.map((livrable, idx) => (
                        <li key={idx}>
                          <i className="fas fa-arrow-right"></i>
                          <span>{livrable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Connecteur entre étapes */}
            {index < etapes.length - 1 && (
              <div className="etape-connector">
                <i className="fas fa-chevron-down"></i>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* TIMELINE */}
      <section className="processus-timeline">
        <div className="container">
          <h2 data-aos="fade-down">Calendrier Type de Mise en Place</h2>
          <p className="timeline-intro" data-aos="fade-up">
            Découvrez comment nous structurons le projet semaine après semaine
          </p>

          <div className="timeline-grid">
            {timelines.map((timeline, index) => (
              <div key={index} className="timeline-card" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <div className="timeline-phase">{timeline.phase}</div>
                <div className="timeline-duree">{timeline.duree}</div>
                <ul className="timeline-taches">
                  {timeline.taches.map((tache, idx) => (
                    <li key={idx}>
                      <i className="fas fa-circle-notch"></i>
                      <span>{tache}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONDITIONS DE SUCCÈS */}
      <section className="processus-conditions">
        <div className="container">
          <h2 data-aos="fade-down">Les Conditions de Notre Succès</h2>
          <div className="conditions-grid">
            {conditions.map((condition, index) => (
              <div key={index} className="condition-card" data-aos="fade-up" data-aos-delay={`${index * 50}`}>
                <div className="condition-icon">
                  <i className={condition.icon}></i>
                </div>
                <h4>{condition.titre}</h4>
                <p>{condition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARAISON */}
      <section className="processus-comparison">
        <div className="container">
          <h2 data-aos="fade-down">Avant vs Après ArchivPro</h2>
          <div className="comparison-grid">
            <div className="comparison-card avant" data-aos="fade-right">
              <h3>❌ Avant ArchivPro</h3>
              <ul>
                <li>Archives stockées partout (locaux, entrepoôts)</li>
                <li>Pas d'inventaire centralisé</li>
                <li>Recherche documents laborieuse (jours)</li>
                <li>Risques de perte ou vol</li>
                <li>Coûts immobiliers élevés</li>
                <li>Conformité légale incertaine</li>
                <li>Pas de destruction certifiée</li>
              </ul>
            </div>
            <div className="comparison-card apres" data-aos="fade-left">
              <h3>✅ Après ArchivPro</h3>
              <ul>
                <li>Archive centralisée et sécurisée</li>
                <li>Inventaire digitalisé et accessible</li>
                <li>Accès rapide en moins de 24h</li>
                <li>Sécurité 24h/24 et surveillance</li>
                <li>Économies d'espace et immobilier</li>
                <li>Conformité RGPD et ISO garantie</li>
                <li>Destruction légale certifiée</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ RAPIDE */}
      <section className="processus-faq">
        <div className="container">
          <h2 data-aos="fade-down">Questions Fréquentes sur Notre Méthode</h2>
          <div className="faq-grid">
            <div className="faq-item" data-aos="fade-up">
              <h4>Combien de temps dure tout le processus?</h4>
              <p>
                En moyenne 8-12 semaines pour passer d'un audit complet à l'opérationnalité. 
                Cela dépend du volume d'archives et de votre disponibilité pour la collecte.
              </p>
            </div>
            <div className="faq-item" data-aos="fade-up" data-aos-delay="100">
              <h4>Y a-t-il une interruption de service?</h4>
              <p>
                Non. Nous organisons la collecte sans perturber vos activités. 
                Vos documents restent accessibles pendant toute la transition.
              </p>
            </div>
            <div className="faq-item" data-aos="fade-up" data-aos-delay="200">
              <h4>Que se passe-t-il en cas d'urgence?</h4>
              <p>
                Notre support 24h/24 vous permet d'accéder rapidement à vos documents. 
                Les demandes urgentes sont traitées en moins de 2h.
              </p>
            </div>
            <div className="faq-item" data-aos="fade-up" data-aos-delay="300">
              <h4>Quels sont les coûts cachés?</h4>
              <p>
                Il n'y a pas de frais cachés. Tout est précisé dans le devis: stockage, 
                accès, numérisation, support. Les prix sont transparents et dégressifs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="processus-cta">
        <div className="cta-content">
          <h2>Prêt à simplifier votre archivage?</h2>
          <p>Démarrez avec notre audit diagnostique gratuit et sans engagement</p>
          <a href="/contact" className="btn-cta-primary">Demander un audit gratuit</a>
        </div>
      </section>
    </>
  );
};

export default Processus;