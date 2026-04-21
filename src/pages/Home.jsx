import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BASE = import.meta.env.BASE_URL;

function Home() {
  const toggleDropdown = (element) => {
    element.nextElementSibling.classList.toggle('open');
  };

  const toggleFaq = (element) => {
    element.parentElement.classList.toggle('open');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <nav id="navbar">
        <a className="nav-logo" href="#">
          Archiv<span>Pro</span>
          <span className="nav-badge">Dakar</span>
        </a>
        <ul className="nav-links" id="navLinks">
          <li><a href="#accueil">Accueil</a></li>
          <li className="has-dropdown">
            <a href="#services" onClick={(e) => toggleDropdown(e.target.parentElement)}>Services ▾</a>
            <ul className="dropdown">
              <li><a href="#archivage">Archivage</a></li>
              <li><a href="#numerisation">Numérisation</a></li>
              <li><a href="#ged">Gestion Électronique (GED)</a></li>
              <li><a href="#destruction">Destruction sécurisée</a></li>
              <li><a href="#audit">Audit</a></li>
              <li><a href="#externalisation">Externalisation</a></li>
            </ul>
          </li>
          <li><a href="#pourquoi">Pourquoi nous</a></li>
          <li><a href="#secteurs">Secteurs</a></li>
          <li><a href="#processus">Méthode</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact" className="nav-cta">Devis gratuit</a></li>
        </ul>
        <button className="nav-toggle" id="navToggle" onClick={() => document.getElementById('navLinks').classList.toggle('open')}>
          <span></span><span></span><span></span>
        </button>
      </nav>

      <section className="hero" id="accueil">
        <div className="hero-flag">
          <div className="flag-dot"><span className="g"></span><span className="y"></span><span className="r"></span></div>
          <span className="flag-txt">Sénégal · Dakar</span>
        </div>
        <p className="hero-eyebrow">Cabinet d'archivage professionnel</p>
        <h1 className="hero-title">
          Vos documents,<br /><em>protégés et accessibles</em><br />au Sénégal.
        </h1>
        <p className="hero-sub">
          ArchivPro est la référence en gestion documentaire à Dakar. Nous prenons en charge l'archivage physique, la
          numérisation, la GED et la destruction sécurisée de vos documents d'entreprise.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Demander un devis gratuit →</a>
          <a href="#services" className="btn-secondary">Voir nos services</a>
        </div>
        <div className="hero-stats">
          <div>
            <div className="stat-num">10+</div>
            <div className="stat-label">Années d'expérience</div>
          </div>
          <div>
            <div className="stat-num">300+</div>
            <div className="stat-label">Entreprises clientes</div>
          </div>
          <div>
            <div className="stat-num">1M+</div>
            <div className="stat-label">Documents archivés</div>
          </div>
          <div>
            <div className="stat-num">100%</div>
            <div className="stat-label">Confidentialité</div>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="trust-item"><span className="trust-icon security"></span><span className="trust-text">Sécurité certifiée</span>
        </div>
        <div className="trust-item"><span className="trust-icon compliance"></span><span className="trust-text">Conformité
          réglementaire</span></div>
        <div className="trust-item"><span className="trust-icon speed"></span><span className="trust-text">Accès en 24h</span></div>
        <div className="trust-item"><span className="trust-icon local"></span><span className="trust-text">Présence locale à
          Dakar</span></div>
        <div className="trust-item"><span className="trust-icon support"></span><span className="trust-text">Support dédié</span></div>
        <div className="trust-item"><span className="trust-icon recycle"></span><span className="trust-text">Destruction
          certifiée</span></div>
      </div>

      <section id="services">
        <div className="services-header">
          <div>
            <p className="section-label">Nos prestations</p>
            <h2 className="section-title">Quatre services,<br />une seule <em>solution</em></h2>
          </div>
          <p className="services-desc">Chaque prestation est adaptée aux réalités des entreprises sénégalaises, des PME aux
            grandes administrations.</p>
        </div>
        <div className="services-grid">

          <div className="service-card">
            <span className="service-num">01 / 04</span>
            <div className="service-icon"><img src={`${BASE}image/Archivage physique.png`} className="imgCard" alt="" /></div>
            <div className="service-name">Archivage physique</div>
            <p className="service-desc">Stockage sécurisé de vos documents papier dans nos entrepôts à Dakar, avec contrôle
              d'accès, gestion des durées de conservation et inventaire complet.</p>
            <ul className="service-features">
              <li>Entrepôt sécurisé et climatisé</li>
              <li>Inventaire et codification des boîtes</li>
              <li>Récupération rapide à la demande</li>
              <li>Gestion des durées légales de conservation</li>
            </ul>
            <a href="#contact" className="service-link">Demander un devis →</a>
          </div>

          <div className="service-card">
            <span className="service-num">02 / 04</span>
            <div className="service-icon"><img src={`${BASE}image/Numérisation.jpg`} className="imgCard" alt="" /></div>
            <div className="service-name">Numérisation / Scan</div>
            <p className="service-desc">Transformation de vos dossiers papier en fichiers numériques indexés, avec
              reconnaissance de texte (OCR) pour une recherche instantanée.</p>
            <ul className="service-features">
              <li>Scan haute résolution (300 à 600 dpi)</li>
              <li>OCR et indexation des documents</li>
              <li>Formats PDF, TIFF, JPEG selon besoin</li>
              <li>Livraison sur clé USB, disque ou cloud</li>
            </ul>
            <a href="#contact" className="service-link">Demander un devis →</a>
          </div>

          <div className="service-card">
            <span className="service-num">03 / 04</span>
            <div className="service-icon"><img src={`${BASE}image/Gestion_Electronique.jpg`} className="imgCard" alt="" /></div>
            <div className="service-name">Gestion Électronique (GED)</div>
            <p className="service-desc">Mise en place d'un système de gestion électronique des documents pour centraliser,
              sécuriser et partager vos fichiers au sein de votre organisation.</p>
            <ul className="service-features">
              <li>Classement automatique par catégorie</li>
              <li>Accès sécurisé multi-utilisateurs</li>
              <li>Workflow de validation et signatures</li>
              <li>Formation de vos équipes incluse</li>
            </ul>
            <a href="#contact" className="service-link">Demander un devis →</a>
          </div>

          <div className="service-card">
            <span className="service-num">04 / 04</span>
            <div className="service-icon"><img src={`${BASE}image/Destruction_sécurisée.jpg`} className="imgCard" alt="" /></div>
            <div className="service-name">Destruction sécurisée</div>
            <p className="service-desc">Élimination confidentielle et certifiée de vos documents en fin de durée de conservation
              légale, avec remise d'un certificat officiel de destruction.</p>
            <ul className="service-features">
              <li>Broyage industriel sécurisé</li>
              <li>Certificat de destruction remis</li>
              <li>Collecte à vos locaux possible</li>
              <li>Conformité RGPD et réglementation locale</li>
            </ul>
            <a href="#contact" className="service-link">Demander un devis →</a>
          </div>

          <div className="service-card">
            <span className="service-num">05 / 06</span>
            <div className="service-icon"><img src={`${BASE}image/Audit_Conseil.jpg`} className="imgCard" alt="Audit et Conseil" /></div>
            <div className="service-name">Audit et Conseil en Archivage</div>
            <p className="service-desc">Évaluation complète de vos systèmes d'archivage existants avec recommandations
              personnalisées pour optimiser la gestion documentaire.</p>
            <ul className="service-features">
              <li>Analyse des flux documentaires</li>
              <li>Évaluation de la conformité légale</li>
              <li>Recommandations pour l'optimisation</li>
              <li>Rapport détaillé et plan d'action</li>
            </ul>
            <a href="#contact" className="service-link">Demander un devis →</a>
          </div>

          <div className="service-card">
            <span className="service-num">06 / 06</span>
            <div className="service-icon"><img src={`${BASE}image/Externalisation_Archivage.jpg`} className="imgCard" alt="Externalisation" />
            </div>
            <div className="service-name">Externalisation de l'Archivage</div>
            <p className="service-desc">Prise en charge complète de vos archives physiques et numériques pour réduire les coûts
              internes et sécuriser vos documents sensibles.</p>
            <ul className="service-features">
              <li>Stockage sécurisé externe</li>
              <li>Gestion et inventaire des archives</li>
              <li>Accès rapide et suivi des demandes</li>
              <li>Respect des normes RGPD et locales</li>
            </ul>
            <a href="#contact" className="service-link">Demander un devis →</a>
          </div>

        </div>
      </section>

      <section id="partenaires">
        <p className="section-label">Nos partenaires</p>
        <h2 className="section-title">Nos clients de <em>confiance</em></h2>
        <div className="partenaires-container">
          <div className="partenaires-track">
            <div className="partenaire-logo"><img src={`${BASE}logo/A-I-B-D.png`} alt="A-I-B-D" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/africa-bank.png`} alt="Africa Bank" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/amnesty.png`} alt="Amnesty" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/BIPA.png`} alt="BIPA" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/C-S-E.png`} alt="C-S-E" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/carte-brune.png`} alt="Carte Brune" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/F-O-N-G-I-P.png`} alt="F-O-N-G-I-P" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/groupe-kirene.png`} alt="Groupe Kirene" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/HOGIP.jpg`} alt="HOGIP" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/I-D-E-P.png`} alt="I-D-E-P" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/KPMG.png`} alt="KPMG" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/L-C-S.png`} alt="L-C-S" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/L-M-B-D.png`} alt="L-M-B-D" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/la providence.png`} alt="La Providence" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/M-S-A.jpg`} alt="M-S-A" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/notaire.png`} alt="Notaire" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/P-M-N.png`} alt="P-M-N" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/S-A.png`} alt="S-A" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/sedima.png`} alt="Sedima" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/senegal.jpg`} alt="Senegal" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/total-energie.png`} alt="Total Energie" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/touba-oil.png`} alt="Touba Oil" /></div>
            <div className="partenaire-logo"><img src={`${BASE}logo/U-A-M.png`} alt="U-A-M" /></div>
          </div>
        </div>
      </section>

      <section id="pourquoi">
        <p className="section-label" style={{ color: 'var(--gold)' }}>Nos engagements</p>
        <h2 className="section-title section-title-light">Pourquoi les entreprises<br />de Dakar nous <em>choisissent</em></h2>
        <div className="why-grid">
          <div className="why-list">
            <div className="why-item">
              <span className="why-num">01</span>
              <div>
                <div className="why-title">Expertise locale</div>
                <p className="why-text">Nous connaissons parfaitement le cadre juridique sénégalais et les durées de
                  conservation obligatoires selon chaque secteur d'activité.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-num">02</span>
              <div>
                <div className="why-title">Sécurité maximale</div>
                <p className="why-text">Entrepôts sous surveillance 24h/24, accès restreint par badge, protection incendie et
                  suivi GPS pour les transferts de documents sensibles.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-num">03</span>
              <div>
                <div className="why-title">Accès rapide garanti</div>
                <p className="why-text">Retrouvez n'importe quel document archivé en moins de 24h. Livraison dans vos bureaux à
                  Dakar ou consultation sur place dans nos locaux.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-num">04</span>
              <div>
                <div className="why-title">Tarifs adaptés au marché local</div>
                <p className="why-text">Des formules flexibles et transparentes conçues pour les entreprises sénégalaises, sans
                  frais cachés et avec des contrats sans engagement.</p>
              </div>
            </div>
            <div className="why-item">
              <span className="why-num">05</span>
              <div>
                <div className="why-title">Confidentialité absolue</div>
                <p className="why-text">Accord de confidentialité signé avec chaque client. Nos collaborateurs sont formés et
                  habilités pour manipuler des documents sensibles.</p>
              </div>
            </div>
          </div>

          <div className="why-visual">
            <p className="section-label">Certifications & conformité</p>
            <div className="gold-line"></div>
            <div className="why-visual">
              <p className="section-label">Certifications & conformité</p>
              <div className="gold-line"></div>

              <div className="cert-badge">
                <div className="cert-icon"><i className="fas fa-landmark"></i></div>
                <div>
                  <div className="cert-name">Conformité ARTP</div>
                  <div className="cert-desc">Réglementation sénégalaise sur les données</div>
                </div>
              </div>

              <div className="cert-badge">
                <div className="cert-icon"><i className="fas fa-shield-alt"></i></div>
                <div>
                  <div className="cert-name">Protection des données</div>
                  <div className="cert-desc">Conformité Commission des Données Personnelles (CDP)</div>
                </div>
              </div>

              <div className="cert-badge">
                <div className="cert-icon"><i className="fas fa-file-alt"></i></div>
                <div>
                  <div className="cert-name">ISO 15489</div>
                  <div className="cert-desc">Norme internationale de gestion documentaire</div>
                </div>
              </div>

              <div className="cert-badge">
                <div className="cert-icon"><i className="fas fa-check-circle"></i></div>
                <div>
                  <div className="cert-name">Charte de confidentialité</div>
                  <div className="cert-desc">Accord signé avec chaque client</div>
                </div>
              </div>

              <div className="cert-badge">
                <div className="cert-icon"><i className="fas fa-user-shield"></i></div>
                <div>
                  <div className="cert-name">Habilitation sécurité</div>
                  <div className="cert-desc">Personnel formé et contrôlé</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="secteurs">
        <p className="section-label">Secteurs d'activité</p>
        <h2 className="section-title">Nous intervenons dans<br />tous les <em>secteurs</em></h2>

        <div className="secteurs-grid">

          <div className="secteur-tag">
            <div className="secteur-icon"><i className="fas fa-balance-scale"></i></div>
            <div className="secteur-name">Cabinets juridiques</div>
          </div>

          <div className="secteur-tag">
            <div className="secteur-icon"><i className="fas fa-hospital"></i></div>
            <div className="secteur-name">Santé & hôpitaux</div>
          </div>

          <div className="secteur-tag">
            <div className="secteur-icon"><i className="fas fa-university"></i></div>
            <div className="secteur-name">Banque & finance</div>
          </div>

          <div className="secteur-tag">
            <div className="secteur-icon"><i className="fas fa-landmark"></i></div>
            <div className="secteur-name">Administrations</div>
          </div>

          <div className="secteur-tag">
            <div className="secteur-icon"><i className="fas fa-hard-hat"></i></div>
            <div className="secteur-name">BTP & immobilier</div>
          </div>

          <div className="secteur-tag">
            <div className="secteur-icon"><i className="fas fa-broadcast-tower"></i></div>
            <div className="secteur-name">Télécommunications</div>
          </div>

          <div className="secteur-tag">
            <div className="secteur-icon"><i className="fas fa-graduation-cap"></i></div>
            <div className="secteur-name">Éducation</div>
          </div>

          <div className="secteur-tag">
            <div className="secteur-icon"><i className="fas fa-briefcase"></i></div>
            <div className="secteur-name">RH & comptabilité</div>
          </div>

          <div className="secteur-tag">
            <div className="secteur-icon"><i className="fas fa-ship"></i></div>
            <div className="secteur-name">Commerce & import-export</div>
          </div>

          <div className="secteur-tag">
            <div className="secteur-icon"><i className="fas fa-industry"></i></div>
            <div className="secteur-name">Industrie</div>
          </div>

        </div>
      </section>

      <section id="processus">
        <p className="section-label">Comment ça marche</p>
        <h2 className="section-title">Une mise en place <em>simple</em><br />en 4 étapes</h2>
        <div className="process-steps">
          <div className="process-step">
            <span className="step-num">ÉTAPE 01</span>
            <div className="step-title">Audit & diagnostic</div>
            <p className="step-desc">Nous analysons vos volumes documentaires, vos types de documents et vos obligations légales
              de conservation.</p>
          </div>
          <div className="process-step">
            <span className="step-num">ÉTAPE 02</span>
            <div className="step-title">Devis personnalisé</div>
            <p className="step-desc">Vous recevez une proposition sur mesure et un plan d'archivage adapté à votre activité sous
              48h ouvrées.</p>
          </div>
          <div className="process-step">
            <span className="step-num">ÉTAPE 03</span>
            <div className="step-title">Collecte & traitement</div>
            <p className="step-desc">Nos équipes à Dakar assurent la collecte, l'inventaire, la codification et le transfert
              sécurisé de vos documents.</p>
          </div>
          <div className="process-step">
            <span className="step-num">ÉTAPE 04</span>
            <div className="step-title">Suivi en continu</div>
            <p className="step-desc">Accédez à vos archives à tout moment via notre interface. Notre équipe reste disponible
              pour toute demande urgente.</p>
          </div>
        </div>
      </section>

      <section id="temoignages">
        <p className="section-label" style={{ color: 'var(--gold)' }}>Témoignages</p>
        <h2 className="section-title section-title-light">Ce que disent nos <em>clients</em></h2>
        <div className="temoignages-grid">
          <div className="temoignage-card">
            <img className="mon_avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Amadou Mbaye" />
            <div className="temoignage-stars">★★★★★</div>
            <p className="temoignage-text">« ArchivPro a pris en charge toutes nos archives juridiques en moins d'une semaine.
              Le service est irréprochable, la confidentialité respectée et le personnel très professionnel. »</p>
            <div className="temoignage-author">
              <div className="author-avatar">AM</div>
              <div>
                <div className="author-name">Amadou Mbaye</div>
                <div className="author-role">Directeur, Cabinet d'avocats Mbaye & Associés</div>
              </div>
            </div>
          </div>
          <div className="temoignage-card">
            <img className="mon_avatar" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Fatou Diallo" />
            <div className="temoignage-stars">★★★★★</div>
            <p className="temoignage-text">« La numérisation de nos 15 ans de dossiers patients a été réalisée rapidement et
              avec une précision remarquable. On retrouve maintenant n'importe quel document en quelques secondes. »</p>
            <div className="temoignage-author">
              <div className="author-avatar">FD</div>
              <div>
                <div className="author-name">Dr. Fatou Diallo</div>
                <div className="author-role">Directrice médicale, Clinique Santé Plus</div>
              </div>
            </div>
          </div>
          <div className="temoignage-card">
            <img className="mon_avatar" src="https://randomuser.me/api/portraits/men/65.jpg" alt="Ousmane Sarr" />
            <div className="temoignage-stars">★★★★★</div>
            <p className="temoignage-text">« Partenaire fiable depuis 5 ans pour notre archivage comptable. Les délais sont
              tenus, les tarifs justes et l'équipe toujours disponible. Je recommande sans hésiter. »</p>
            <div className="temoignage-author">
              <div className="author-avatar">OS</div>
              <div>
                <div className="author-name">Ousmane Sarr</div>
                <div className="author-role">DAF, Groupe Sarr Industries</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <p className="section-label">Questions fréquentes</p>
        <h2 className="section-title">Tout ce que vous voulez <em>savoir</em></h2>
        <div className="faq-grid" id="faqGrid">
          <div className="faq-item">
            <div className="faq-question" onClick={(e) => toggleFaq(e.target)}>
              Quels types de documents pouvez-vous archiver ?
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-answer">
              Nous archivons tous types de documents d'entreprise : contrats, dossiers RH, comptabilité, documents juridiques, dossiers médicaux, plans techniques, correspondances et tout autre document papier ou numérique.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={(e) => toggleFaq(e.target)}>
              Combien de temps conservez-vous les documents ?
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-answer">
              La durée de conservation dépend de la nature du document et de la réglementation applicable. Nous vous conseillons sur les durées légales obligatoires et gérons automatiquement les alertes d'expiration.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={(e) => toggleFaq(e.target)}>
              Comment récupérer un document archivé rapidement ?
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-answer">
              Sur simple demande par téléphone ou email, nous pouvons vous transmettre un document numérisé dans l'heure ou vous livrer le document original dans vos bureaux à Dakar dans la journée.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={(e) => toggleFaq(e.target)}>
              Êtes-vous conformes à la réglementation sénégalaise ?
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-answer">
              Oui, nous sommes pleinement conformes à la réglementation en vigueur au Sénégal, notamment les exigences de la Commission des Données Personnelles (CDP) et les obligations légales d'archivage par secteur.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={(e) => toggleFaq(e.target)}>
              Intervenez-vous dans toute la région de Dakar ?
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-answer">
              Oui, nous intervenons dans toute la région de Dakar (Plateau, Almadies, Parcelles Assainies, Pikine, Guédiawaye, etc.) et nous pouvons nous déplacer dans d'autres régions du Sénégal sur demande.
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={(e) => toggleFaq(e.target)}>
              Quel est le délai pour démarrer une prestation ?
              <span className="faq-toggle">+</span>
            </div>
            <div className="faq-answer">
              Après validation du devis et signature du contrat, notre équipe peut intervenir dans vos locaux sous 3 à 5 jours ouvrés. Pour les urgences, nous proposons une intervention express sous 48h.
            </div>
          </div>
        </div>
      </section>

      <section id="contact" data-aos="fade-up" style={{ background: '#1a2438', padding: '80px 0' }}>
        <div className="container">
          <p className="section-label" style={{ color: 'var(--gold)' }}>Contactez-nous</p>
          <h2 className="section-title section-title-light">Obtenez votre devis<br /><em>gratuit</em> sous 24h</h2>

          <div className="contact-grid">
            <div className="contact-info">
              <p className="contact-intro" style={{ color: 'var(--gold)', background: 'none', padding: '0' }}>
                Notre équipe à Dakar vous répond rapidement. Décrivez-nous votre besoin et nous vous
                proposons une solution adaptée avec un tarif transparent.
              </p>

              <div className="contact-item">
                <div className="contact-item-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <div className="contact-item-label" style={{ color: 'var(--gold)' }}>Adresse</div>
                  <div className="contact-item-value" style={{ color: 'var(--gold)' }}>Plateau, Dakar<br />Sénégal</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><i className="fas fa-phone"></i></div>
                <div>
                  <div className="contact-item-label" style={{ color: 'var(--gold)' }}>Téléphone</div>
                  <div className="contact-item-value" style={{ color: 'var(--gold)' }}>+221 76 188 55 12</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><i className="fas fa-envelope"></i></div>
                <div>
                  <div className="contact-item-label" style={{ color: 'var(--gold)' }}>Email</div>
                  <div className="contact-item-value" style={{ color: 'var(--gold)' }}>
                    <a href="mailto:contact@archivpro.sn" style={{ color: 'var(--gold)', textDecoration: 'none' }}>contact@archivpro.sn</a>
                  </div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon"><i className="fas fa-clock"></i></div>
                <div>
                  <div className="contact-item-label" style={{ color: 'var(--gold)' }}>Horaires</div>
                  <div className="contact-item-value" style={{ color: 'var(--gold)' }}>
                    Lundi – Vendredi : 8h00 – 18h00<br />Samedi : 9h00 – 13h00
                  </div>
                </div>
              </div>

              <a href="https://wa.me/221763162164" className="whatsapp-btn" target="_blank">
                <i className="fab fa-whatsapp"></i> Contacter sur WhatsApp
              </a>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Prénom *</label>
                  <input className="form-input" type="text" placeholder="Votre prénom" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Nom *</label>
                  <input className="form-input" type="text" placeholder="Votre nom" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Société / Organisation</label>
                <input className="form-input" type="text" placeholder="Nom de votre entreprise" />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Téléphone *</label>
                  <input className="form-input" type="tel" placeholder="+221 XX XXX XX XX" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input className="form-input" type="email" placeholder="votre@email.com" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Service souhaité *</label>
                <select className="form-select" required>
                  <option value="" disabled selected>Sélectionner un service</option>
                  <option>Archivage physique</option>
                  <option>Numérisation / Scan</option>
                  <option>Gestion électronique (GED)</option>
                  <option>Destruction sécurisée</option>
                  <option>Plusieurs services — à préciser</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Votre message</label>
                <textarea className="form-textarea"
                  placeholder="Décrivez votre besoin : volume approximatif de documents, délais souhaités, contraintes particulières…"></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit">Envoyer ma demande →</button>
              <p className="form-note">Réponse garantie sous 24h ouvrées · Devis entièrement gratuit et sans engagement</p>
            </form>
          </div>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.780479086929!2d-17.443885!3d14.667575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1724ebcf41b5d%3A0x2d84ad82d5bef1a6!2sDakar-Plateau%2C%20Dakar!5e1!3m2!1sfr!2ssn!4v1773965687257!5m2!1sfr!2ssn"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Home;