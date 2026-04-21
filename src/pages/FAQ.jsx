import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './FAQ.css';

const BASE = import.meta.env.BASE_URL;

const FAQ = () => {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const faqCategories = [
    {
      id: 1,
      category: "Services Généraux",
      icon: "fas fa-box",
      color: "#c9873a",
      questions: [
        {
          id: 1,
          q: "Quels sont les services proposés par ArchivPro?",
          a: "ArchivPro propose 6 services principaux: Archivage physique, Numérisation/Scan, Gestion Électronique des Documents (GED), Destruction sécurisée, Audit et Conseil, et Externalisation de l'archivage. Chaque service peut être utilisé indépendamment ou en combinaison selon vos besoins."
        },
        {
          id: 2,
          q: "Pouvez-vous personnaliser les services selon nos besoins?",
          a: "Absolument! Chaque solution est sur mesure. Nous réalisons d'abord un audit diagnostique pour comprendre votre contexte, vos volumes et vos spécificités. Ensuite, nous proposons une offre adaptée avec les services et options qui correspondent à votre situation."
        },
        {
          id: 3,
          q: "Travaillez-vous avec tous les secteurs d'activité?",
          a: "Oui, nous intervenons dans 10 secteurs clés: juridique, santé, finance, administrations, BTP, télécommunications, éducation, RH/comptabilité, commerce et industrie. Notre expertise adaptée à chaque secteur garantit le respect des délais de conservation légaux spécifiques."
        },
        {
          id: 4,
          q: "Y a-t-il une durée minimale d'engagement?",
          a: "Non, il n'y a pas de durée minimale obligatoire. Nous proposons des contrats flexibles adaptés à vos besoins. Vous pouvez commencer avec une collecte unique ou un contrat d'archivage à long terme, selon votre contexte."
        }
      ]
    },
    {
      id: 2,
      category: "Processus et Délais",
      icon: "fas fa-hourglass-end",
      color: "#e09848",
      questions: [
        {
          id: 1,
          q: "Combien de temps dure le processus d'archivage complet?",
          a: "En moyenne 8-12 semaines de l'audit initial à la pleine opérationnalité. Cela dépend du volume de documents et de la disponibilité pour les collectes. L'audit diagnostique dure 2-3 jours, le devis 2-5 jours, la collecte et traitement 1-4 semaines, et vous avez accès immédiatement après."
        },
        {
          id: 2,
          q: "Restez-vous accessibles pendant la transition?",
          a: "Oui. Nous organisons la collecte sans interruption de service. Si vous avez besoin d'accéder à des documents pendant la transition, nous les retrouvons rapidement. La plateforme web devient accessible dès la fin du traitement initial."
        },
        {
          id: 3,
          q: "Quel est le délai d'accès à mes documents?",
          a: "Nous garantissons un accès en 24h maximum à vos documents. Pour les demandes régulières, c'est generalement le jour même. En cas d'urgence (moins de 2h), contactez notre support 24h/24 qui traitera votre demande en priorité."
        },
        {
          id: 4,
          q: "Comment fonctionne le suivi des demandes?",
          a: "Vous accédez à une plateforme web sécurisée où vous pouvez consulter votre inventaire complet, faire des demandes d'accès, suivre leur statut en temps réel et générer des rapports. Vous recevez aussi des alertes sur les délais de conservation de vos documents."
        }
      ]
    },
    {
      id: 3,
      category: "Sécurité et Conformité",
      icon: "fas fa-lock",
      color: "#1a2438",
      questions: [
        {
          id: 1,
          q: "Comment garantissez-vous la sécurité de mes documents?",
          a: "Notre entrepôt à Dakar est climatisé 24h/24, avec accès contrôlé par badge et surveillance vidéo. Les documents sont inventoriés, étiquetés et stockés de manière organisée. Nous disposons de certifications ISO 9001 et ISO 15489, et sommes conformes au RGPD."
        },
        {
          id: 2,
          q: "Que se passe-t-il en cas de sinistre (incendie, inondation)?",
          a: "Notre entrepôt dispose de systèmes de prévention incendie (sprinklers, détecteurs) et est situé en zone non inondable à Dakar. Nous maintenons régulièrement nos équipements. Les données numériques sont sauvegardées sur serveurs redondants avec backup externe mensuel."
        },
        {
          id: 3,
          q: "Êtes-vous conformes au RGPD?",
          a: "Oui, nous respectons strictement le RGPD. Tous vos documents contenant des données personnelles sont traités avec sécurité renforcée. Nous avons signé un Contrat de Traitement de Données (DPA) pour tout archivage. Destruction certifiée RGPD à expiration des délais."
        },
        {
          id: 4,
          q: "Qui peut accéder à mes archive?",
          a: "Seules les personnes autorisées par votre entreprise peuvent y accéder. Notre système d'authentification multi-niveaux garantit que chaque accès est tracé. Aucun de nos collaborateurs ne peut consulter vos documents sans justification."
        }
      ]
    },
    {
      id: 4,
      category: "Tarifs et Conditions",
      icon: "fas fa-dollar-sign",
      color: "#f5e0c0",
      questions: [
        {
          id: 1,
          q: "Quels sont les coûts associés au service?",
          a: "L'audit diagnostique est gratuit. Les tarifs dépendent de: Volume stocké (m³), Services utilisés (archivage, numérisation, GED), Durée du contrat. Nous proposons une tarification dégressif pour les forts volumes. Aucun coût caché - tout est transparent dans le devis."
        },
        {
          id: 2,
          q: "Y a-t-il des frais supplémentaires?",
          a: "Les seuls frais additionnels possibles sont: Demandes urgentes de documents (accès < 2h), Numérisation de documents supplémentaires hors contrat initial, Prestations additionnelles (transport, collecte en région). Tout est mentionné à l'avance et facturé transparemment."
        },
        {
          id: 3,
          q: "Quel est le prix du m³ d'archivage?",
          a: "Nos tarifs commencent à partir de 20,000 FCFA/m³/an pour les volumes importants (>100m³) avec tarification dégressif. Pour les PME avec volumes plus modestes, nous avons des forfaits mensuels attractifs. Demandez un devis personnalisé sans engagement."
        },
        {
          id: 4,
          q: "Offrez-vous des réductions pour volumes importants?",
          a: "Oui, nos tarifs sont dégressifs selon le volume. Plus vous archivez de documents, plus le coût unitaire baisse. Nous pouvons aussi proposer des arrangements spéciaux pour les administrations et grandes entreprises. Contactez-nous pour négocier sur mesure."
        }
      ]
    },
    {
      id: 5,
      category: "Technique et Accès",
      icon: "fas fa-laptop",
      color: "#c9873a",
      questions: [
        {
          id: 1,
          q: "Comment accéder à la plateforme web?",
          a: "Vous recevez identifiants (login/password) lors de l'activation de votre compte. La plateforme est accessible 24h/24 depuis n'importe quel navigateur (Chrome, Firefox, Safari, Edge). Authentification sécurisée requise pour chaque accès. Support technique disponible si problème."
        },
        {
          id: 2,
          q: "Puis-je accéder via mobile ou tablette?",
          a: "Oui, notre plateforme est entièrement responsive. Vous pouvez consulter votre inventaire, faire des demandes d'accès et suivre le statut depuis votre smartphone ou tablette, iOS ou Android. Même interface que version desktop, optimisée pour petit écran."
        },
        {
          id: 3,
          q: "Quels formats de fichiers acceptez-vous pour la numérisation?",
          a: "Nous scannons en haute résolution (300-600 dpi) et proposons les formats: PDF (recommandé), TIFF, JPEG selon besoin. Tous les fichiers incluent OCR (reconnaissance de texte) pour recherche optimisée. Livraison possible sur clé USB, disque externe ou cloud."
        },
        {
          id: 4,
          q: "Puis-je télécharger mes archives numérisées?",
          a: "Oui, vous pouvez télécharger vos archives numérisées à tout moment depuis la plateforme. Pas de limite de téléchargement. Pour gros volumes, nous proposons aussi livraison sur disque externe ou clé USB. Support technique pour aider si besoin."
        }
      ]
    },
    {
      id: 6,
      category: "Destruction et Fin de Conservation",
      icon: "fas fa-trash",
      color: "#e09848",
      questions: [
        {
          id: 1,
          q: "Comment fonctionne la destruction de documents?",
          a: "À expiration du délai de conservation légal, nous vous alertons automatiquement. Après votre autorisation, destruction effectuée par broyage industriel sécurisé. Certificat de destruction remis signant élimination conforme. Processus 100% legale et documenté."
        },
        {
          id: 2,
          q: "Puis-je demander destruction avant le délai légal?",
          a: "Oui, vous pouvez demander destruction anticipée pour certains documents à tout moment. Nous vérifierons juste la conformité légale. Certificat de destruction fourni pour traçabilité administrative. Coûts additionnels possibles selon volumes."
        },
        {
          id: 3,
          q: "Comment prouvez-vous la destruction?",
          a: "Nous remettons un Certificat de Destruction officiel signé détaillant: Documents détruits, Dates destruction, Méthode broyage, Numéro de lot. Document légalement valable pour vos obligations administratives et de conformité RGPD."
        },
        {
          id: 4,
          q: "Que se passe-t-il après expiration du contrat?",
          a: "À fin de contrat, plusieurs options: Renouvellement contrat, Reprise de documents à vos locaux, Destruction des archives (avec certificat). Nous accordons toujours période transition avant destruction finale pour que vous décidiez."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryId, questionId) => {
    const key = `${categoryId}-${questionId}`;
    setExpanded(expanded === key ? null : key);
  };

  return (
    <>
      {/* HEADER FAQ */}
      <section className="faq-header" data-aos="fade-down">
        <div className="header-content">
          <img src={`${BASE}image/logo-archive.png`} alt="ArchivPro Dakar" className="header-logo" />
          <h1 className="header-title">Questions Fréquentes</h1>
          <p className="header-subtitle">Trouvez réponses à vos questions sur nos services</p>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="faq-intro">
        <div className="container">
          <div className="intro-content" data-aos="fade-up">
            <h2>Nous répondons à vos questions</h2>
            <p>
              Parcourez notre FAQ pour trouver réponses immédiates sur nos services, processus, 
              sécurité et tarification. Si vous ne trouvez pas votre réponse, contactez notre 
              équipe support disponible 24h/24.
            </p>
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Recherchez une question (ex: tarifs, sécurité, délais)..." disabled />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CATEGORIES */}
      <section className="faq-content">
        <div className="container">
          {faqCategories.map((category, catIndex) => (
            <div key={category.id} className="faq-category" data-aos="fade-up" data-aos-delay={`${catIndex * 50}`}>
              {/* Category Header */}
              <div className="category-header" style={{ '--cat-color': category.color }}>
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h3>{category.category}</h3>
              </div>

              {/* Questions */}
              <div className="questions-list">
                {category.questions.map((question, qIndex) => (
                  <div
                    key={question.id}
                    className={`faq-item ${expanded === `${category.id}-${question.id}` ? 'expanded' : ''}`}
                  >
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(category.id, question.id)}
                    >
                      <span className="q-text">
                        <i className="fas fa-question-circle"></i>
                        {question.q}
                      </span>
                      <span className="q-toggle">
                        <i className="fas fa-chevron-down"></i>
                      </span>
                    </button>

                    {expanded === `${category.id}-${question.id}` && (
                      <div className="faq-answer">
                        <div className="answer-content">
                          <i className="fas fa-info-circle"></i>
                          <p>{question.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="faq-contact">
        <div className="container">
          <div className="contact-box" data-aos="fade-up">
            <h2>Vous ne trouvez pas votre réponse?</h2>
            <p>Notre équipe support est disponible pour répondre à toutes vos questions</p>
            <div className="contact-methods">
              <div className="method" data-aos="fade-up" data-aos-delay="0">
                <div className="method-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h4>Téléphone</h4>
                <p className="method-value">+221 76 188 55 12</p>
                <p className="method-hours">Lun-Ven: 8h-18h</p>
              </div>
              <div className="method" data-aos="fade-up" data-aos-delay="100">
                <div className="method-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h4>Email</h4>
                <p className="method-value">contact@ang-archivage.sn</p>
                <p className="method-hours">Réponse sous 2h</p>
              </div>
              <div className="method" data-aos="fade-up" data-aos-delay="200">
                <div className="method-icon">
                  <i className="fas fa-comments"></i>
                </div>
                <h4>Chat Live</h4>
                <p className="method-value">Chat en ligne 24h/24</p>
                <p className="method-hours">Support instant</p>
              </div>
              <div className="method" data-aos="fade-up" data-aos-delay="300">
                <div className="method-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h4>Visite</h4>
                <p className="method-value">Dakar, Sénégal</p>
                <p className="method-hours">Sur rendez-vous</p>
              </div>
            </div>
            <a href="/contact" className="btn-contact">Nous contacter directement →</a>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="faq-cta">
        <div className="cta-content">
          <h2>Prêt à commencer?</h2>
          <p>Démarrez avec notre audit diagnostique gratuit, sans engagement</p>
          <a href="/contact" className="btn-cta">Demander un audit gratuit</a>
        </div>
      </section>
    </>
  );
};

export default FAQ;